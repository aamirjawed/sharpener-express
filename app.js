const express = require("express")

const app  = express()

const router = express.Router();

function addUserMiddleware(req, res, next){
    req.user ="Guest"
    next()
}

app.get("/welcome", addUserMiddleware, (req,res) => {
    res.send(`<h1>Welcome ${req.user}!</h1>`)
})

app.listen(3000, () => {
    console.log("Server is up and running on port 3000! Ready to handle requests.")
})