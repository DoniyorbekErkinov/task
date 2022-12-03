import { defineStore} from "pinia";
import users from "@/data/users";
import {TokenService} from "@/store/storage.service";
import router from "@/router";
export const useUserStore = defineStore("UsersStore", {
    // STATE
    state: () => ({
        users,
        count: 0
    }),
    // ACTIONS
    actions: {
        Login(userForm) {
            this.users.forEach(el => {
                if(el.username === userForm.username && el.password === userForm.password) {
                    TokenService.setToken('123asfe654w5erwer')
                    TokenService.setUser({
                        user: el.username,
                        role: el.role,
                        canDelete: el.canDeleted,
                        id: el.id
                    })
                    router.push('/')
                }
            })
        },
        LogOut() {
            TokenService.removeToken()
            router.push('/login')
        },
        getUsers() {
            console.log(this.users)
            return this.users
        }
    }
    // GETTER
})