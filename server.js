import express from "express"
import dotenv from "dotenv"
import userRouter from "./router/userRoutes.js"
import productRouter from "./router/productRoutes.js"

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

app.use("/api/users",userRouter)
app.use("/api/products",productRouter)