const router = require("express").Router()
const fs = require("fs");
const apiRouter = require("./api");
const ejs = require("ejs");
const productList = require("./productList.json");

router.get("/", async (req, res) => {
    let html = await fs.promises.readFile("./index.html",'utf-8'); //string econvert kore nileo hobe
    
    // when page loads after refresh we need to show  the list with ejs //comment delete koris na
    html= ejs.render(html, {productList}) 
    res.end(html);
})


router.use("/api", apiRouter)


module.exports = router