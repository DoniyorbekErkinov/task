const TOKEN_KEY = 'access_token'
const USER = 'user'
const TokenService = {
    setToken(accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken)
    },
    getToken() {
        return localStorage.getItem(TOKEN_KEY)
    },
    setUser(userData) {
        localStorage.setItem(USER, userData)
    },
    getUser() {
        return localStorage.getItem(USER)
    }
}
export {TokenService}