const express = require('express')
const app = express()
const {products} = require('./data.js')
app.get('/', (req,res)=>{
    const newProduct = products.map((product)=>{
        const{id, name, image} = product
        return{id, name, image}
    })
    res.json(newProduct)
})

app.get('/api/product/:prodId',(req,res)=>{
    const {prodId} = req.params
    console.log(req.params)
    const uniqueProduct = products.filter((product)=> product.id === Number(prodId))
    res.json(uniqueProduct)
})

app.listen(8000)
console.log('The port is running in http://localhost:8000')