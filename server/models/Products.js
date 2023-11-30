import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    brand : {
        type : String,
        required : true
    },
    mfb : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    price : {
        type : Object,
        required : true
    },
    sizes : {
        type : Array,
        required : true
    },
    stock : {
        type : Number,
        required : true
    },
    supplier : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
})

const Product = new mongoose.model('productDatas', ProductSchema)

export default Product
