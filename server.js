const https = require('https')
const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')
const request  = require('express')
const path = require('path')

app.use(cors())

app.get('/', async (req, res) =>{

    https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
      let data = '';
    
      // Um bloco de dados foi recebido.
      resp.on('data', (chunk) => {
        data += chunk;
      });
    
      // Toda a resposta foi recebida. Exibir o resultado.
      resp.on('end', () => {
        let r = JSON.parse(data)
        res.json(r.hdurl);
        res.sendFile(path.join(__dirname + '/simple.html'))
    
      });
    
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
})

app.listen('3000')