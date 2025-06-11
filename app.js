const express = require("express")

const app  = express()

const router = express.Router();

app.use(router)

// function addUserMiddleware(req, res, next){
//     req.user ="Guest"
//     next()
// }

// app.get("/welcome", addUserMiddleware, (req,res) => {
//     res.send(`<h1>Welcome ${req.user}!</h1>`)
// })

// making routes 

router.get("/orders", (req,res) => {
    res.send("Here is the list of all orders")
    console.log("All orders list")
})

router.post("/order", (req, res) => {
    res.send("A new order has been created.")
    console.log("A new order has been created")
})

router.get("/users", (req, res) =>{
    res.send("Here is the list of all users")
    console.log("All users list")
})

router.post("/user", (req,res) => {
    res.send("A new user has been added.")
})

app.listen(3000, () => {
    console.log("Server is up and running on port 3000! Ready to handle requests.")
})