import express from "express"
import { getTrousersLadies, getTrousersMens, getTshirtsLadies, getTshirtsMF, getTshirtsMens } from "../controllers/Items.js"

const router = express.Router()

router.get("/tshirtmens", getTshirtsMens)
router.get("/tshirtladies", getTshirtsLadies)
router.get("/tshirtmf", getTshirtsMF)
router.get("/trousermens", getTrousersMens)
router.get("/trouserladies", getTrousersLadies)


export default router