const express = require("express");
const homeRoutes = require("./routes/homeRoutes")
const studentsRoutes = require("./routes/studentRoutes");
const coursesRoutes = require("./routes/coursesRoutes")

const app  = express()

// home route
app.use("/", homeRoutes)
app.use("/students", studentsRoutes)
app.use("/courses", coursesRoutes)





app.listen(4000, () => {
    console.log("Server is up and running on port 3000! Ready to handle requests.")
})