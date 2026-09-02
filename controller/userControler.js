import * as userService from "../service/userService.js"

const getUsers = (req, res) => {
    const users = userService.getUsers()
    res.json({
        success: true,
        data: users
    })
}

const login = (req, res) => {
    const user = userService.login(req.body)
    res.json(user)
}




export { getUsers,login }