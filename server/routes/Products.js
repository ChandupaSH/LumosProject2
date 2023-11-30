import express from "express"
import { getAllProducts } from "../controllers/getAllProducts.js"

const router = express.Router()

router.get("/allProducts", getAllProducts)


export default router