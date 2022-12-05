const users = [
    {
        id: 1,
        username: "admin",
        password: "admin",
        canDeleted: false,
        role: "admin",
    },
    {
        id: 2,
        username: "candidate",
        password: "candidate",
        canDeleted: false,
        role: "candidate",
        solvedQuiz: false
    },
    {
        id: 3,
        username: "user",
        password: "user",
        canDeleted: true,
        role: "user",
    }
]
export default users
