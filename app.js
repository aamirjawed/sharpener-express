const express = require("express");
// const homeRoutes = require("./routes/homeRoutes")
// const studentsRoutes = require("./routes/studentRoutes");
// const coursesRoutes = require("./routes/coursesRoutes")

const usersRoutes = require("./routes/usersRoutes")
const productsRoutes = require("./routes/productsRoutes")
const cartRoutes = require("./routes/cartRoutes")

const app  = express()

app.use(express.static("public"))
app.use(express.json())

// home route
// app.use("/", homeRoutes)
// app.use("/students", studentsRoutes)
// app.use("/courses", coursesRoutes)

// app.use("/users", usersRoutes)
// app.use("/products", productsRoutes)
// app.use("/cart", cartRoutes)

app.use("/api/products", productsRoutes)



app.listen(4000, () => {
    console.log("Server is up and running on port 4000! Ready to handle requests.")
})