const express = require("express")
const { getAllProduct, addProduct, getProductWithId } = require("../controllers/productControlles")

const router = express.Router()

router.get("/", getAllProduct)

// router.post("/", addProduct)

// router.get("/:id",getProductWithId)


module.exports = router;