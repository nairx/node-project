let orders = [
    {
        id: 1,
        userId: 1,
        orderValue: 340,
        items: [
            { id: 1, name: "Product 1", price: 100, category: "electronics", Quantity: 2 },
            { id: 3, name: "Product 3", price: 140, category: "clothes", Quantity: 1 }
        ],
        status: "Pending"
    },
    {
        id: 2,
        userId: 1,
        orderValue: 500,
        items: [
            { id: 1, name: "Product 1", price: 100, category: "electronics", quantity: 5 },
        ],
        status: "Pending"
    },
    {
        id: 3,
        userId: 2,
        orderValue: 320,
        items: [
            { id: 1, name: "Product 1", price: 100, category: "electronics", Quantity: 2 },
            { id: 2, name: "Product 2", price: 120, category: "electronics", Quantity: 1 },
        ],
        status: "Pending"
    },
]

export default orders