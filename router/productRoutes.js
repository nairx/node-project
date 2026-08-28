import * as productController from "../controller/productController.js"
import express from "express"

const Router = express.Router()

Router.get("/",productController.getProducts)

export default Router