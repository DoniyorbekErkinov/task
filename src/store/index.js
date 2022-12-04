import { defineStore} from "pinia";
import users from "@/data/users";
import courses from "@/data/courses";
import students from "@/data/students";
import {TokenService} from "@/store/storage.service";
import router from "@/router";
export const useUserStore = defineStore("UsersStore", {
    // STATE
    state: () => ({
        users,
        students,
        courses
    }),
    // ACTIONS
    actions: {
        Login(userForm) {
            this.getUsers()
            this.getCourses()
            this.getStudents('maxToMin')
            this.users.forEach(el => {
                if(el.username === userForm.username && el.password === userForm.password) {
                    TokenService.setToken('123asfe654w5erwer')
                    TokenService.setUser({
                        user: el.username,
                        role: el.role,
                        canDelete: el.canDeleted,
                        id: el.id
                    })
                    TokenService.setUsers(this.users)
                    TokenService.setStudents(this.students)
                    TokenService.setCourses(this.courses)
                    router.push('/')
                }
            })
        },
        LogOut() {
            TokenService.removeToken()
            TokenService.removeCourses()
            TokenService.removeStudents()
            TokenService.removeUsers()
            router.push('/login')
        },
        getUsers() {
            return JSON.parse(TokenService.getUsers())
        },
        getStudents(sortBy) {
            let s = []
            s = JSON.parse(TokenService.getStudents())
            if(s && sortBy === 'maxToMin') {
                return  s.sort(function(a, b){return b.coursesLength - a.coursesLength});
            } else if(s && sortBy === 'minToMax'){
                return  s.sort(function(a, b){return a.coursesLength - b.coursesLength});
            } else {
                return this.students
            }
        },
        addStudents(student) {
            let list = JSON.parse(TokenService.getStudents())
            student.id = Math.max(...list.map(o => o.id)) + 1
          list.push(student)
          TokenService.setStudents(list)
          this.getStudents()
        },
        delete(id) {
            let list = JSON.parse(TokenService.getStudents())
            let newList = list.filter(el => el.id !== id)
            TokenService.setStudents(newList)
            this.getStudents()
        },
        update(student) {
            let list = JSON.parse(TokenService.getStudents())
            let newList = list.filter(el => el.id !== student.id)
          newList.push(student)
          TokenService.setStudents(newList)
          this.getStudents()
        },
        getCourses() {
                return JSON.parse(TokenService.getCourses())
        }
    }
    // GETTER
})