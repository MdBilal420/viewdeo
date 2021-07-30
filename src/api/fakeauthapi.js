
const Users = [
    {
        username: "admin",
        password: "123456"
    },

]

const findUser = (username) => {
    return Users.find((user) => user.username === username)
}

const fakeAuthApi = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = findUser(username)
            console.log(user)
            if (user && user.password === password) {
                resolve({ success: true, code: 200 })
            }
            reject({ success: false, code: 401 })
        }, 3000)
    })
}

export default fakeAuthApi;