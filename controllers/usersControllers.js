



 const getUsers = ((req,res) => {
    res.send("Fetching all Users")
})

const addNewUser = ((req, res) => {
    res.send("Added a new User")
})

const getUserWithID = (req, res) => {
    const userId = req.params.id
    res.send(`Fetching user with ID: ${userId}`)
}


module.exports = {getUsers, addNewUser, getUserWithID}