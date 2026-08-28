import orders from "../model/orderModel.js"

let orderModel = orders

const getOrders = () => {
    return orderModel
}

const createOrder = (orderData) => {
    orderModel.push(orderData)
    return orderModel
}


export { getOrders,createOrder }