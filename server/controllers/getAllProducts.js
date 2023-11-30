import Product from "../models/Products.js"

export const getAllProducts = async (req,res) => {
    try {
        const data = await Product.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(`error : ${error}`);
    }
}

