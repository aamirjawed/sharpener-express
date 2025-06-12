const express  = require("express")

const router = express.Router()

router.get("/", (req,res) =>{
    res.send("Orders list")
})

router.post("/", (req, res) => {
    res.send("A order is created")
})

module.exports = router;
