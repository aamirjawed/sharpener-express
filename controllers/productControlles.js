// const { getAllProducts, addProducts, getProductsWithId } = require("../service/productServices")

const path  = require("path")
'../'


const getAllProduct = (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'product.html'))
}

// const addProduct = (req, res) => {
//     const response = addProducts()
//     res.send(response)
// }


// const getProductWithId =  (req, res) => {
//     const userId = req.params.id
//     const response = getProductsWithId()
//     res.send(response)
// }

module.exports = {getAllProduct}