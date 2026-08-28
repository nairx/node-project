import * as productService from "../service/productService.js"

const getProducts = (req, res) => {
    const products = productService.getProducts()
    res.status(200).json({
        success: true,
        data: products
    })
}

export {getProducts}