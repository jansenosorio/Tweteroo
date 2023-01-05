import express from "express";
import cors from 'cors'

const app = express()

// Server configuration

app.use(cors())
app.listen(5000, () => {
    console.log('Servidor iniciado!')
})

// Variables from my application
app.get('/', (req, res) => {
    res.send('Hello World')
})