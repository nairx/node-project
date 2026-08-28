import * as orderService from "../service/orderService.js"

const getOrders = (req, res) => {
    const orders = orderService.getOrders()
    res.status(200).json({
        success: true,
        data: orders
    })
}

export {getOrders}