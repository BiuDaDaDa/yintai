const express = require('express')
const proxy = require('http-proxy-middleware')
const path = require('path')
const app = express()
const config = require('./config')

app.use(express.static(path.join(__dirname, 'dist')))
// app.use(key, proxy(value))
// app.use(key, proxy(value))

let proxyTable = config.dev.proxyTable
Object.keys(proxyTable).forEach(function (key,index,array) {
  app.use(key,proxy(proxyTable[key]))
})

// for(index in
// config.dev.proxyTable)console.log(index)
app.listen(8080,  () => {
  console.log('server is running http://localhost')
})
