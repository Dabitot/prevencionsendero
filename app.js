require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req,res) => {

console.log ('petición recibida')

res..status(200).send('<h2>hola mundo</h2>')

})

const PORT = process.env.PORT

app.listen(4000, () =>{

console.log(`servidor escuchando en puerto ${PORT}`)

})


