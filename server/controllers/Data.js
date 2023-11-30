import DataSchem from "../models/Data.js"


export const getData = async (req, res) => {
    try {
        const allData = await DataSchem.find()
        res.status(200).json(allData)
    } catch (err) {
        console.log(err)
    }
}



