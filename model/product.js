const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    productType:{type:String,required:true},
    productName:{type:String,required:true},
    productBrand:{type:String,required:true},
    productPrice:{type:String,required:true},
    
},{timestamps:true})

const productModel=new mongoose.model('product',productSchema)

module.exports=productModel