const express = require('express')
const app = express()
const routes = require('./routes/index')
require('./database')
require('./tables/associations')
const port = 3000

// handling incoming req body in json format
app.use(express.json())

app.use('/', routes)

app.listen(port, (err) => {
  if (err) {
    console.log('error in connection', err)
  }
  console.log('app listening on 3000')
})
