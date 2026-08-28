import express from "express"
import * as userController from "../controller/userControler.js"

const Router = express.Router()

Router.get("/", userController.getUsers)

export default Router