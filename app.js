const { response } = require('express');
const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    const query = req.body.cityInput;
    const apiKey = '21ebaf7fa325b7c0b789a91432fc2440';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric&lang=pt_br`;
    https.get(url, (response) => {
        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            res.send(`
                    <h2>Temperatura em ${query}: ${temp} graus celsius</h2>
                    <p>Descrição: ${description}</p>
                `);
        });
    });
});

app.listen(3000, () => console.log("Nosso server está rodando na porta 3000..."));