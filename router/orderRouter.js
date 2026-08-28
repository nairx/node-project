import * as orderController from "../controller/orderController.js"
import express from "express"

const Router = express.Router()

Router.get("/",orderController.getOrders)
Router.post("/",orderController.createOrder)

export default Router