const router = require("express").Router()
const productList = require("./productList.json")

/**
 * product add form handler
 * 
 * @route POST /api/product
 */
router.post("/product", async(req, res)=>{
    
    const {name, price} = req.fields

    if(!name){
        return res.status(400).json({name:"name can not be empty"});
    }

    // ... and other validation logics here

    const newProduct = {
        id: productList.length,
        name: name.trim(), price: parseFloat(price) 
    }
    productList.push(newProduct);
    res.json(newProduct)   //eikhane amra  post  req er response  e newly made product er data back kortesi
    //just eitar response ta 

})

/**
 * get product list
 * @route GET /api/product
 */
router.get("/product", async(req, res)=>{
    return res.json(productList);  
})


module.exports = router;