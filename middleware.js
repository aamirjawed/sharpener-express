const getProductMiddleware = (req, res, next) => {
    const method  = req.method;
    const endPoint = req.url;

    console.log(`${method} request made to ${endPoint}`)
    next()
}


const postProductMiddleware = (req, res, next) => {
    const method  = req.method;
    const endPoint = req.url;

    console.log(`${method} request made to ${endPoint}`)
    next()
}

const getUserMiddleware = (req, res, next) => {
    const method = req.method;
    const endPoint = req.endPoint

    console.log(`${method} request made to ${endPoint}`)
    next()

}

const postUserMiddleware = (req, res, next) => {
    const method = req.method;
    const endPoint = req.endPoint

    console.log(`${method} request made to ${endPoint}`)
    next()

}

module.exports = {getProductMiddleware, postProductMiddleware, getUserMiddleware, postUserMiddleware};