const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 3000 ;

app.use(cors())


const chefs = require('.//Data/chefs.json')

app.get('/', (req, res) => {
  res.send('Foods are running!')
})

app.get('/chefs' , (req , res) =>{
    res.send(chefs)
})

app.listen(port, () => {
  console.log(`Foods API is running on port ${port}`)
})