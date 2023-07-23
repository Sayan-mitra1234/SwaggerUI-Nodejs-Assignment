const app=require("./app")

const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://swaggerUI:sayan1234@swaggerui.dedrimu.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})

app.listen(3005,()=>{console.log("Server running .........")})
