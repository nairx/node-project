import users from "../model/userModel.js"

let userModel = users

const getUsers = (req, res) => {
    return userModel
}

export { getUsers }