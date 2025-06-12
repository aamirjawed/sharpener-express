const { getAllUsers, addNew, getUserwithId } = require("../service/usersServices")




 const getUsers = ((req,res) => {
    const response = getAllUsers();
    res.send(response)
})

const addNewUser = ((req, res) => {
    const response = addNew()
    res.send(response)
})

const getUserWithID = (req, res) => {
    const userId = req.params.id
    const response  = getUserwithId(userId);
    res.send(response)
}


module.exports = {getUsers, addNewUser, getUserWithID}