const express = require("express");
const app = express();
const axios = require("axios");
const PORT = 8001;

// Porta de comunicação com o localhost
app.listen(PORT, function() {
   console.log(`O APP está rodando na porta ${PORT}`)
});

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

// Rotas secundárias

app.get('/MortySmith', async(req, res) => {
   // O axios retorna uma response e atribuimos-a ao data que é a response já transformada em json
   const {data} = await axios("https://rickandmortyapi.com/api/character/2")
   res.write(`
   <div> Nome: ${data.name} </div>
   <div> Estado atual: ${data.status} </div>
   <div> Especie: ${data.species} </div>
   <div> Genero: ${data.gender} </div>
   <img src= ${data.image}></img>`)
   console.log(data);
   res.end();
});

app.get('/RickSanchez', async(req, res) => {
    const {data} = await axios("https://rickandmortyapi.com/api/character/1")
    res.write(`
    <div> Nome: ${data.name} </div>
    <div> Estado atual: ${data.status} </div>
    <div> Especie: ${data.species} </div>
    <div> Genero: ${data.gender} </div>
    <img src= ${data.image}></img>`)
    console.log(data)
    res.end();
 })

app.get('/SummerSmith', async(req, res) => {
    const {data} = await axios("https://rickandmortyapi.com/api/character/3")
    res.write(`
    <div> Nome: ${data.name} </div>
    <div> Estado atual: ${data.status} </div>
    <div> Especie: ${data.species} </div>
    <div> Genero: ${data.gender} </div>
    <img src= ${data.image}></img>`)
    console.log(data)
    res.end();
 })

 app.get('/BethSmith', async(req, res) => {
    const {data} = await axios("https://rickandmortyapi.com/api/character/4")
    res.write(`
    <div> Nome: ${data.name} </div>
    <div> Estado atual: ${data.status} </div>
    <div> Especie: ${data.species} </div>
    <div> Genero: ${data.gender} </div>
    <img src= ${data.image}></img>`)
    console.log(data)
    res.end();
 })

 app.get('/JarrySmith', async(req, res) => {
   const {data} = await axios("https://rickandmortyapi.com/api/character/5")
   res.write(`
   <div> Nome: ${data.name} </div>
   <div> Estado atual: ${data.status} </div>
   <div> Especie: ${data.species} </div>
   <div> Genero: ${data.gender} </div>
   <img src= ${data.image}></img>`)
   console.log(data)
   res.end();
})

app.get('/AbadangoCluster', async(req, res) => {
   const {data} = await axios("https://rickandmortyapi.com/api/character/6")
   res.write(`
   <div> Nome: ${data.name} </div>
   <div> Estado atual: ${data.status} </div>
   <div> Especie: ${data.species} </div>
   <div> Genero: ${data.gender} </div>
   <img src= ${data.image}></img>`)
   console.log(data)
   res.end();
})

app.get('/All', async(req, res) => {
   const {data} = await axios("https://rickandmortyapi.com/api/character")
   data.results.map(function (results){
      res.write(`
      <div> Nome: ${results.name} </div>
      <div> Estado atual: ${results.status} </div>
      <div> Especie: ${results.species} </div>
      <div> Genero: ${results.gender} </div>
      <img src= ${results.image}></img>`)})
   console.log(data)
   res.end();
})
