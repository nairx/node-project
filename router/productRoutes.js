import * as productController from "../controller/productController.js"
import express from "express"

const Router = express.Router()

Router.get("/", productController.getProducts)
Router.post("/", productController.createProduct)
Router.put("/:id", productController.updateProduct)
Router.delete("/:id", productController.deleteProduct)

export default Router