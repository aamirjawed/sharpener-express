const submitHandler = (e) => {
    e.preventDefault()
    console.log("Submit function called")
    const product = e.target.productName.value
    console.log(product)

    const obj = {
        "productName":product
    }
    axios.post('http://localhost:4000' + "/api/products", obj ).then((result) => {
        console.log(result.data)
    })
}