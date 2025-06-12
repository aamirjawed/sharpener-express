const express = require("express")
const {courses} = require("../data")

const router = express.Router();


router.get("/", (req,res) => {
    const courseName = courses.map(c => c.name)
    
    res.send(`Courses: ${courseName}`)
})

router.get("/:id", (req, res) => {
    const courseId = parseInt(req.params.id)
    const course = courses.find(c => c.id === courseId)
    
    if(!course){
        res.status(404).send("Course not found")
    }else{
    res.send(`Course ${course.name}, Description: ${course.description}`)
    }
})


module.exports = router


