'use strict'
const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname)))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is up and listening at port: ${PORT}`)
})
