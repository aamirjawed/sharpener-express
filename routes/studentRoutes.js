const express = require("express")
const {students} = require("../data")

const router = express.Router()


router.get("/", (req, res) => {
    const studentNames = students.map(student => student.name);
    const responseText = `Students:\n${studentNames.join("\n")}`;
    
    res.send(responseText);
})

router.get("/:id", (req, res) => {
    const userId = parseInt(req.params.id)
    const student = students.find(s=> s.id === userId)

    if(!student){
        res.status(404).send("Student not found!")
    }else{
        res.send(`Student ${student.name}`)
    }
})

module.exports = router;