import * as productService from "../service/productService.js"

const getProducts = (req, res) => {
    const products = productService.getProducts()
    res.status(200).json({
        success: true,
        data: products
    })
}

const createProduct = (req, res) => {
    const product = productService.createProduct(req.body)
    res.status(201).json({
        success: true,
        data: product
    })
}

const updateProduct = (req, res) => {
    const id = Number(req.params.id)
    const product = productService.updateProduct(id, req.body)
    res.status(200).json({
        success: true,
        data: product
    })
}

const deleteProduct = (req, res) => {
    const id = Number(req.params.id)
    const product = productService.deleteProduct(id)
    res.status(200).json({
        success: true,
        data: product
    })
}


export { getProducts, createProduct, updateProduct,deleteProduct }