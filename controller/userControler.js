import userModel from "../model/userModel.js"

const getUsers = (req, res) => {
    res.json({
        success: true,
        data: userModel
    })
}

export { getUsers }