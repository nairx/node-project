import express from "express"
import * as userController from "../controller/userControler.js"

const Router = express.Router()

Router.get("/", userController.getUsers)
Router.post("/login", userController.login)
// Router.post("/", userController.createUser)
// Router.put("/", userController.updateUser)
// Router.delete("/", userController.deleteUser)

export default Router