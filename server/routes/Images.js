import express from "express"
import { getLogoImage } from "../controllers/Images.js"

const router = express.Router()

router.get("/logoimage" , getLogoImage)

export default router