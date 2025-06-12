const express = require("express")
const userControllers  = require("../controllers/usersControllers")

const router = express.Router()

router.get("/", userControllers.getUsers)

router.post("/", userControllers.addNewUser)

router.get("/:id", userControllers.getUserWithID)


module.exports = router;