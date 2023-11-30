import mongoose from "mongoose";

const ImageDataSchema = new mongoose.Schema({
    name  : String,
    data : String
})

const ImageData = new mongoose.model("imagedatas", ImageDataSchema)

export default ImageData