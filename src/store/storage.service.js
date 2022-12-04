const TOKEN_KEY = 'access_token'
const USER = 'user'
const USERS = 'users'
const STUDENTS = 'students'
const COURSES = 'courses'
const TokenService = {
    setToken(accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken)
    },
    getToken() {
        return localStorage.getItem(TOKEN_KEY)
    },
    removeToken() {
        return localStorage.removeItem(TOKEN_KEY)
    },
    setUser(userData) {
        localStorage.setItem(USER, JSON.stringify(userData))
    },
    getUser() {
        return localStorage.getItem(USER)
    },
    removeUser() {
        return localStorage.removeItem(USER)
    },
    /**
     * DATA
     */
    setUsers(usersData) {
        localStorage.setItem(USERS, JSON.stringify(usersData))
    },
    getUsers() {
        return localStorage.getItem(USERS)
    },
    removeUsers() {
        return localStorage.removeItem(USERS)
    },
    setStudents(studentsData) {
        localStorage.setItem(STUDENTS, JSON.stringify(studentsData))
    },
    getStudents() {
        return localStorage.getItem(STUDENTS)
    },
    removeStudents() {
        return localStorage.removeItem(STUDENTS)
    },
    setCourses(coursesData) {
        localStorage.setItem(COURSES, JSON.stringify(coursesData))
    },
    getCourses() {
        return localStorage.getItem(COURSES)
    },
    removeCourses() {
        return localStorage.removeItem(COURSES)
    },
}
export {TokenService}