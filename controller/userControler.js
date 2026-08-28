import * as userService from "../service/userService.js"

const getUsers = (req, res) => {
    const users = userService.getUsers()
    res.json({
        success: true,
        data: users
    })
}

export { getUsers }