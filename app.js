const express = require("express");
const getProductMiddleware = require("./middleware");

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

// router.get("/orders", (req,res) => {
//     res.send("Here is the list of all orders")
//     console.log("All orders list")
// })

// router.post("/order", (req, res) => {
//     res.send("A new order has been created.")
//     console.log("A new order has been created")
// })

// router.get("/users", (req, res) =>{
//     res.send("Here is the list of all users")
//     console.log("All users list")
// })

// router.post("/user", (req,res) => {
//     res.send("A new user has been added.")
// })


// router.get("/products", (req, res) => {
//     res.send("Here is the list of all products.")
// })

// router.post("/products", (req,res) => {
//     console.log("A new product has been added.")
// })

// router.get("/categories", (req,res) => {
//     res.send("Here is the list of all categories")
// })

// router.get("/categories", (req, res) => {
//     console.log("A new category has been created.")
// })

// app.use((req,res) => {
//     res.status(404).send("<h1>404- Page not found</h1>")
// })

// dynamic routing

// router.get("/", (req, res) => {
//     res.send("Hello from Home page!")
// })

// router.get("/about", (req, res) => {
//     res.send("Hello from About page!")
// })

// router.get("/contact/:username", (req, res)=>{
    
//     const name = req.params.username
//     const role = req.query.role
//     res.send(`Welcome ${name} your role is ${role}`)
// })

// create server with middleware logging

// const getProductMiddleware  = require("./middleware")

const middleware = require("./middleware")

router.get("/products", middleware.getProductMiddleware, (req,res) => {
   
    res.send("Here is the full list of products")
})

router.post("/products", middleware.postProductMiddleware, (req, res) => {
    res.send("A new product has been added")
})

router.get("/users", middleware.getUserMiddleware, (req, res) => {
    res.send("Here is the list of all users")
})

router.post("/users", middleware.postUserMiddleware, (req, res) => {
    res.send("A new user has been added")
})




app.listen(4000, () => {
    console.log("Server is up and running on port 3000! Ready to handle requests.")
})