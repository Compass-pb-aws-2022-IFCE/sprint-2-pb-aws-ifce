const express = require("express")
const app = express()
const axios = require("axios")

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});


app.get('/MortySmith', async(req, res) => {
   const {data} = await axios("https://rickandmortyapi.com/api/character/2")
   res.write(`
   <div> Nome: ${data.name} </div>
   <div> Estado atual: ${data.status} </div>
   <div> Especie: ${data.species} </div>
   <div> Genero: ${data.gender} </div>
   <img src= ${data.image}></img>
   `)
   console.log(data)
   res.end();
})

app.get(app.get('/RickSanchez', async(req, res) => {
    const {data} = await axios("https://rickandmortyapi.com/api/character/1")
    res.write(`
    <div> Nome: ${data.name} </div>
    <div> Estado atual: ${data.status} </div>
    <div> Especie: ${data.species} </div>
    <div> Genero: ${data.gender} </div>
    <img src= ${data.image}></img>
    `)
    console.log(data)
    res.end();
 }))

app.listen(8000)