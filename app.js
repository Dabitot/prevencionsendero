require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req,res) => {

console.log ('petición recibida')

res.send('<h2>hola mundo</h2>')

})

const PORT = process.env.PORT  || 4000

app.listen(4000, () =>{

console.log(`servidor escuchando en puerto ${PORT}`)

})


