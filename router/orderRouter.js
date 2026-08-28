import * as orderController from "../controller/orderController.js"
import express from "express"

const Router = express.Router()

Router.get("/",orderController.getOrders)

export default Router