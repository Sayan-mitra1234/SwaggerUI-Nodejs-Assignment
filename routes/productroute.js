/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - productType
 *         - productName
 *         - productBrand
 *         - productPrice
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Product
 *         productType:
 *           type: string
 *           description: The product is what type of
 *         productName:
 *           type: string
 *           description: Here we see the product name
 *         productBrand:
 *           type: string
 *           description: We see the brand of that product
 *         productPrice:
 *            type: string
 *            description: we see the price of the product
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the product was added
 *     
 */
/**
 * @swagger
 * tags:
 *   name: Product
 *   description: This is the Product managing API
 * /product/allProducts:
 *   get:
 *     summary: Lists all the products
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: The list of all the Products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 * /product/addNewProduct:
 *   post:
 *     summary: Create a product
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The created Product Successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 * /product/product/{id}:
 *   get:
 *     summary: Get the product by id
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     responses:
 *       200:
 *         description: The product in database response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: The product was not found in database
 * /product/producttype/{type}:
 *   get:
 *     summary: Get the product by type of the product
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: type
 *         schema:
 *           type: string
 *         required: true
 *         description: The product type name 
 *     responses:
 *       200:
 *         description: The products in database response by the type of the product
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: in the type there are no products
 * /product/productBrand/{brand}:
  *   get:
 *     summary: Get the product by Brand of the product
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: brand
 *         schema:
 *           type: string
 *         required: true
 *         description: The product Brand name 
 *     responses:
 *       200:
 *         description: The products in database response by the Brand of the product
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: in that Brand there are no products
 * /product/productPrice/{price}:
 *   get:
 *     summary: Get the product by Price of the product
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: price
 *         schema:
 *           type: string
 *         required: true
 *         description: The product Price  
 *     responses:
 *       200:
 *         description: The products in database response by the Price of the product
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: in the Price there are no products
 * /product/updateProduct/{id}:
 *   put:
 *    summary: Update the product by the id
 *    tags: [Product]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The product ID
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Product'
 *    responses:
 *      200:
 *        description: The Product in database is updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      404:
 *        description: The Product is not found in database
 *      500:
 *        description: Some error happened in databse
 * /product/deleteProduct/{id}:
 *   delete:
 *     summary: Remove product from database by product id
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *
 *     responses:
 *       200:
 *         description: The product was successfully deleted
 *       404:
 *         description: The product was not found in database
 */

const router = require('express').Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

const productModel = require('../SwaggerUI-Nodejs-Assignment/model/product')


router.get('/allProducts', async(req,res)=>{
    
    try{
        const data=await productModel.find({})
        res.status(200).json({
            status:"success",
            data
        })

    }catch(e){
        res.json({
            status:"Failed",
            data
        })
    }
})

router.get('/product/:id', async (req, res) => {
    try {
        const resutProduct = await productModel.find({ _id: req.params.id })

        res.json({
            status: "Success",
            resutProduct
        })
    } catch (e) {
        res.json({
            status: "Failed",
            message: e.message
        })
    }
})
router.get('/producttype/:type',async(req,res)=>{
    try {
        const resutProduct = await productModel.find({productType:req.params.type})
        res.json({
            status: "Success",
            resutProduct
        })
    } catch (error) {
        res.json({
            status: "Failed",
            message: e.message
        })
    }
})
router.get('/productBrand/:brand',async(req,res)=>{
    try {
        const resutProduct = await productModel.find({productBrand:req.params.brand})

        res.json({
            status: "Success",
            resutProduct
        })
    } catch (error) {
        res.json({
            status: "Failed",
            message: e.message
        })
    }
})

router.get('/productPrice/:price',async(req,res)=>{
    const price=parseInt(req.params.price)
    try {
        const resutProduct = await productModel.find({productPrice:{$lt: price }})
    
        res.json({
            status: "Success",
            resutProduct
        })
    } catch (error) {
        res.json({
            status: "Failed",
            message: e.message
        })
    }
})


router.post("/addNewProduct", async (req, res) => {
    try {
        const resultProduct = await productModel.create({
            "productType":req.body.productType,
            "productName":req.body.productName,
            "productBrand":req.body.productBrand,
            "productPrice":req.body.productPrice
        })

        res.json({
            status:"Success",
            resultProduct
        })
    } catch (e) {
        res.json({
            status:"Failed",
            resultProduct
        })
    }
})

router.put("/updateProduct/:id",async (req,res)=>{
    try{
        const resultProduct=await productModel.updateOne({_id:req.params.id},{
            "productType":req.body.productType,
            "productName":req.body.productName,
            "productBrand":req.body.productBrand,
            "productPrice":req.body.productPrice
        })
        res.json({
            status:"Success",
            resultProduct
        })
    }catch(e){
        res.json({
            status:"Failed",
            resultProduct
        })
    }
})

router.delete('/deleteProduct/:id',async (req,res)=>{
    try{
        const resultProduct=await productModel.deleteOne({_id:req.params.id})
    
        res.json({
            status:"Success",
            resultProduct
        })
    }catch(e){
        res.json({
            status:"Failed",
            resultProduct
        })
    }
   

})

module.exports=router