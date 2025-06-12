const express = require("express")

const router = express.Router()


router.get("/", (req, res) => {
    res.send("Users list")
})


router.post("/", (req, res) => {
    res.send("A user is created")
})


module.exports = router;