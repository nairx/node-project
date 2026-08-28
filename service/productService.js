import products from "../model/productModel.js"

let productModel = products

const getProducts = () => {
    return productModel
}

const createProduct = (productData) => {
    productModel.push(productData)
    return productModel
}

const updateProduct = (id,productData) => {
    productModel = productModel.map(product=>product.id === id ? productData : product)
    return productModel
}

const deleteProduct = (id) => {
    productModel = productModel.filter(product=>product.id !== id)
    return productModel
}


export {getProducts,createProduct,updateProduct,deleteProduct}