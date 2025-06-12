const { addToCarts, getProductsWithUserId } = require("../service/cartServices")


const addToCart =  (req, res) => {
    const userId = req.params.id
    const response = addToCarts()
    res.send(response)
}

const getProductWithUserId =  (req, res) => {
    const userId = req.params.id
    const response = getProductsWithUserId();
    res.send(response)

}



module.exports = {addToCart, getProductWithUserId}