import orders from "../model/orderModel.js"

let orderModel = orders

const getOrders = () => {
    return orderModel
}

export { getOrders }