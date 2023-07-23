/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the customer
 *         name:
 *           type: string
 *           description: Customer name
 *         email:
 *           type: string
 *           description: Customer email id in database
 *         password:
 *           type: string
 *           description: Customer login password
 *         
 *     
 */
/**
 * @swagger
 * tags:
 *   name: User
 *   description: This is the User details of the Managing API
 * /customer/customerlist:
 *   get:
 *     summary: Lists all the user in the database
 *     tags: [User]
 *     responses:
 *       200:
 *         description: The list of all the Customer
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
const router = require('express').Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

const userModel=require('../model/user')

router.get('/customerlist', async(req,res)=>{
    try {
        //const data= await userModel.find({},{_id:0,name:1})
        const data= await userModel.aggregate([{$group:{_id:null,name:{$push:"$name"}}}])
        res.json({
            status:"Success",
            data
        })
    } catch (e) {
        status:'failed',
        data
    }
})
module.exports=router