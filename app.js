const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const axios = require("axios")

let planetas = [
    'Alderaan', 'Yavin IV',
    'Hoth', 'Dagobah',
    'Bespin', 'Endor',
    'Naboo', 'Coruscant',
    'Kamino'
];

async function getPlanets(entrada) {
    const { data } = await axios(`https://swapi.dev/api/planets/`)
    for (let planeta = 1; planeta <= (9); planeta++) {
        planetas.push(data.results[planeta].name);
    };
};
function getIndex(vet, entrada) {
    index = vet.indexOf(entrada)
    return index + 2
}


app.use(express.urlencoded({ extended: true }))



app.get('/', (req, res) =>
    res.sendFile(__dirname + '/index.html'));




app.post('/', async (req, res) => {
    let indice = getIndex(planetas, req.body.entrar);
    const { data } = await axios(`https://swapi.dev/api/planets/${indice}` + "?format=json")
    console.log(data.name);
    res.send(`
    <p>Clima:${data.climate}</p>
    <p>População:${data.population}</p>
    <p>Diametro:${data.diameter}</p>
    <p>Periodo de Rotação:${data.rotation_period}</p>
    <a href="/">voltar</a>
    `)
})




app.listen(3000, () => {
    console.log("app running on por 3000...");
})