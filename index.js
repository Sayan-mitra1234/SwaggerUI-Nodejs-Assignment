const app=require("./app")

const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/product',{useNewUrlParser:true,useUnifiedTopology:true})

app.listen(3005,()=>{console.log("Server running .........")})