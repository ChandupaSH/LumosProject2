import ImageData from "../models/ImageData.js"

export const getLogoImage = async(req,res) => {
    try {
        const filter = {
            name : "logo"
        }
        const data = await ImageData.find(filter)
        res.status(200).json(data)
    } catch (error) {
        console.log("error is : ", error);
    }
}