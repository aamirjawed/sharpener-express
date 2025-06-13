const sendErrorResponse = (res ,err) => {
    let statusCode = err.statusCode()
    let message = err.message

    return res.status(statusCode).json({
        message:message,
        completed:false
    })
}


module.exports = {
    sendErrorResponse
}