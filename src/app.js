import express from "express";
import cors from 'cors'

const app = express()

// Server configuration

const PORT = 5000

app.use(express.json())
app.use(cors())
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta: ${PORT}`)
})

// Variables of my application

let user = []


//Functions of my API

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.post('/sign-up', (req, res) => {
    let userBody = req.body
    user = [...user, userBody]
    res.send("OK")

    console.log(user)
})
