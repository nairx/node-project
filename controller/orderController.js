import * as orderService from "../service/orderService.js"

const getOrders = (req, res) => {
    const orders = orderService.getOrders()
    res.status(200).json({
        success: true,
        data: orders
    })
}

const createOrder = (req, res) => {
    const orders = orderService.createOrder(req.body)
    res.status(201).json({
        success: true,
        data: orders
    })
}

export { getOrders,createOrder }