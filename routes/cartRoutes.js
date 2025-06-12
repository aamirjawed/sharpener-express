const express = require("express")
const { addToCart, getProductWithUserId } = require("../controllers/cartControllers")

const router = express.Router()



router.post("/:id", addToCart)

router.get("/:id",getProductWithUserId)


module.exports = router;