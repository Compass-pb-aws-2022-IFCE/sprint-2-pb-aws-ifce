//importando
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const axios = require("axios")

//https://www.mercadobitcoin.net/api/BTC/ticker/

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.post('/', async function (req, res) {
    const { data } = await axios(`https://www.mercadobitcoin.net/api/${req.body.entrada}/ticker/`)
    res.send(`<p>A moeda ${req.body.entrada} teve seu valor máximo de: ${data.ticker.high}BRL nas últimas 24hs</p>
              <p>A moeda ${req.body.entrada} teve seu valor mínimo de: ${data.ticker.low}BRL nas últimas 24hs</p>
              <a href="/">Voltar</a>`)
});


//criando rota
app.listen(3000, () => {
    console.log("A aplicação esta rodando")
})