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

let user = [{username: "Jansen", avatar: "www.google.com.br"}]
let tweets = []


//Functions of my API
app.post('/sign-up', (req, res) => {
    let userBody = req.body
    user = [...user, userBody]
    res.send("OK")
})

app.post('/tweets', (req, res) => {
    const {username, tweet} = req.body 
    let newAvatar = ""
    let newTweet = ""
    let isFindUserName = user.find(e => e.username === username)


    if (!isFindUserName){
        res.send("UNAUTHORIZED")
    } else {
        user.map(e => {
            if (username === e.username){
                newAvatar = e.avatar
            }
        })

        newTweet = {
            username: username,
            avatar: newAvatar,
            tweet: tweet
        }

        tweets = [...tweets, newTweet]

        res.send("OK")
    }
})

app.get('/tweets', (req, res) => {
    let newArr = tweets.slice(-10).reverse()

    res.send(newArr)
})
