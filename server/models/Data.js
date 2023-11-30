import mongoose from "mongoose"


const DataSchema = new mongoose.Schema({
    name:  String,
    price:  Number,
       
})

const DataSchem = new mongoose.model("datas", DataSchema)
export default DataSchem





