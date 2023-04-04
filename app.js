const express = require('express')

const app = express()

app.get('/', (req,res) => {

console.log ('petición recibida')

res.send('<h2>hola mundo con Nodemon</h2>')

})



app.listen(4000, () =>{

console.log('servidor escuchando en puerto 4000')


})


