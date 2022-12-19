// import and create an express app
const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const axios = require("axios");

timestamp = '1671379194375'
publica= '554e2c6b0707df8474dacb4de774b361'
private_key= '10aebe2a7984c4034a05dd3a6685c9efb844d13f'
hash= '245aa02464e3461e9e8178eaca0734d7'


let ids =[
    1011334, 1017100, 1009144,
    1010699, 1009146, 1016823,
    1009148, 1009149, 1010903,
    1011266, 1010354, 1010846,
    1017851, 1012717, 1011297,
    1011031, 1009150, 1011198,
    1011175, 1011136
  ]
let names = [
    '3-D Man',
    'A-Bomb (HAS)',
    'A.I.M.',
    'Aaron Stack',
    'Abomination (Emil Blonsky)',
    'Abomination (Ultimate)',
    'Absorbing Man',
    'Abyss',
    'Abyss (Age of Apocalypse)',
    'Adam Destine',
    'Adam Warlock',
    'Aegis (Trey Rollins)',
    'Aero (Aero)',
    'Agatha Harkness',
    'Agent Brand',
    'Agent X (Nijo)',
    'Agent Zero',
    'Agents of Atlas',
    'Aginar',
    'Air-Walker (Gabriel Lan)'
  ]

async function getInfo(entrada){
    const {data} = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1671379194375&apikey=554e2c6b0707df8474dacb4de774b361&hash=245aa02464e3461e9e8178eaca0734d7`)
        for (let carac=0;carac <= 19;carac ++){
            ids.push(data.data.results);
        };
    for (let carac=0;carac <= 19;carac ++){
            ids2.push(ids[carac].id);
        };
    console.log(ids2)
};


async function getNames(entrada){
        for (let carac=0;carac <= 19;carac ++){
            const {data} = await axios(`http://gateway.marvel.com/v1/public/characters/${ids[carac]}?ts=1671379194375&apikey=554e2c6b0707df8474dacb4de774b361&hash=245aa02464e3461e9e8178eaca0734d7`)
            names.push(data.data.results[0].name);
        };
        console.log(names)
    //for (let carac=0;carac <= 19;carac ++){
    //        ids2.push(ids[carac].id);
    //    };
    //console.log(ids2)
};


function getIndex(vet,entrada){
    index = vet.indexOf(entrada)
    return index
}



//url=`http://gateway.marvel.com/v1/public/characters/{characterId}?ts=${timestamp}&apikey=${publica}&hash=${hash}`
url=`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publica}&hash=${hash}`
//message as response 
msg = "teste"

// definindo as parada
app.use(express.urlencoded({ extended: true}))

//create an end point of the api

app.get('/', (req, res) => 
    res.sendFile(__dirname+'/index.html'));

app.post('/', async(req, res) => {
    let indice = getIndex(names,req.body.entrar)
    const {data} = await axios(`http://gateway.marvel.com/v1/public/characters/${ids[indice]}?ts=1671379194375&apikey=554e2c6b0707df8474dacb4de774b361&hash=245aa02464e3461e9e8178eaca0734d7`)
    console.log(data.data.results[0].name)
    let img = data.data.results[0].thumbnail.path
    let ext = data.data.results[0].thumbnail.extension
    res.send(`<p>${data.data.results[0].name}</p>
    <img src='${img}.${ext}'>
    <a href="\">Voltar</a>`)
});

// now run the applicantion and start listening 
// on port 3000

app.listen(3000, () => {
    console.log("app running on por 3000...");
})