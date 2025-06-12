const { getAllProducts, addProducts, getProductsWithId } = require("../service/productServices")


const getAllProduct = (req,res) => {
    const response = getAllProducts()
    res.send(response)
}

const addProduct = (req, res) => {
    const response = addProducts()
    res.send(response)
}


const getProductWithId =  (req, res) => {
    const userId = req.params.id
    const response = getProductsWithId()
    res.send(response)
}

module.exports = {getAllProduct, addProduct, getProductWithId}