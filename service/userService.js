import users from "../model/userModel.js"

let userModel = users

const getUsers = () => {
    return userModel
}

const login = (userData) => {
    return userModel.find(user=> user.email === userData.email && user.password === userData.password)
}

export { getUsers,login }