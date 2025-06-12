const addToCarts = () => {
    return `Adding product to cart for user with ID: ${userId}`
}


const getProductsWithUserId = (userId) => {
    return `Fetching cart for user with ID: ${userId}`
}


module.exports = {addToCarts, getProductsWithUserId}