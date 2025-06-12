const getAllProducts = () => {
    return "Fetching all products"
}


const addProducts = () => {
    return 'Added a product'
}

const getProductsWithId = (userId) => {
    return `Fetching product with ID: ${userId}`
}


module.exports = {getAllProducts, addProducts, getProductsWithId}