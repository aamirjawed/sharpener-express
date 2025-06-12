const getAllProduct = (req,res) => {
    res.send("Fetching all Product")
}

const addProduct = (req, res) => {
    res.send("Adding a new Product")
}


const getProductWithId =  (req, res) => {
    const userId = req.params.id
    res.send(`Fetching product with ID: ${userId}`)
}

module.exports = {getAllProduct, addProduct, getProductWithId}