import Product from "../models/Products.js"

export const getTshirtsMens = async (req,res) => {
    try {
        const filter = {
            mfb : "male",
            category: "T-Shirt" 
        }
        const data = await Product.find(filter)
        res.status(200).json(data)
    } catch (error) {
        console.log(`error : ${error}`)
    }
}


export const getTshirtsLadies = async (req,res) => {
    try {
        const filter = {
            mfb : "female",
            category: "T-Shirt" 
        }
        const data = await Product.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(`error : ${error}`)
    }
}


export const getTshirtsMF = async (req,res) => {
    try {
        const filter = {
            mfb : "mf",
            category: "T-Shirt" 
        }
        const data = await Product.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(`error : ${error}`)
    }
}


export const getTrousersMens = async (req,res) => {
    try {
        const filter = {
            mfb : "male",
            category: "Trouser" 
        }
        const data = await Product.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(`error : ${error}`)
    }
}


export const getTrousersLadies = async (req,res) => {
    try {
        const filter = {
            mfb : "female",
            category: "Trouser" 
        }
        const data = await Product.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(`error : ${error}`)
    }
}


export const getShirtsMens = async (req,res) => {
    try {
        const filter = {
            mfb : "male",
            category: "Shirt" 
        }
        const data = await Product.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(`error : ${error}`)
    }
}


export const getShirtsLadies = async (req,res) => {
    try {
        const filter = {
            mfb : "female",
            category: "Shirt" 
        }
        const data = await Product.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(`error : ${error}`)
    }
}