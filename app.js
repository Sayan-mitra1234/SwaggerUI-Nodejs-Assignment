const express = require('express');
const app = express();

const swaggerJSDoc=require('swagger-jsdoc')
const swaggerUi=require('swagger-ui-express')

const options={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'node js ',
            version:'1.0.0'
        },
        servers:[
            {
                url:'http://localhost:3005/'
            }
        ]
    },
    apis:["./routes/*.js"]
}

const swaggerSpec=swaggerJSDoc(options)
app.use('/api-doc',swaggerUi.serve,swaggerUi.setup(swaggerSpec))

const productRoute = require('./routes/productroute');


const registrationRoute=require('./routes/registration')

const customerRoute=require('./routes/customerlist')


app.get('/', async (req,res)=>{
    res.send('hello world')
})
app.use(express.json());
app.use('/product', productRoute);
app.use('/registration',registrationRoute)
app.use('/customer',customerRoute)



module.exports = app;