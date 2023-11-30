import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import DataRouter from "./routes/Data.js"
import ProductsRouter from "./routes/Products.js"
import ItemsRouter from "./routes/Items.js"
import ImageRouter from "./routes/Images.js"
import * as fs from 'fs';
import ImageData from "./models/ImageData.js"
import morgan from 'morgan'

const app = express()
dotenv.config()
app.use(cors())
app.use(morgan('combined'));


app.use("/products", ProductsRouter)
app.use("/items", ItemsRouter)
app.use("/images", ImageRouter)


const PORT = process.env.PORT || 6000
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(process.env.PORT, ()=> console.log(`server running at ${PORT}`))
})


