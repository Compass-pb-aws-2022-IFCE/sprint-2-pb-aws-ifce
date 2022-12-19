API- MARVEL

CONSUMINDO API DA MARVEL ATRAVÉS DE NODE.JS

Foi desenvolvido uma aplicação para consumir uma API, onde com a realização de requisições é possível exibir informações de alguns personagens (nome e foto). Foi feito um back end em node, onde é consumido uma API externa via html para entrada de dados para a consulta, após isso tem o processo de conteinarização onde usando docker se cria um container com a aplicação.



API

As APIs são um conjunto de padrões que fazem parte de uma interface e que permitem a criação de plataformas de maneira mais simples e prática para desenvolvedores. A partir de APIs é possível criar softwares, aplicativos, programas e plataformas diversas
Para o projeto foi escolhida uma API pública da Marvel, no qual é possível obter vários recursos referentes às suas atribuições. Para o consumo desta API é preciso de um timestamp (uma variável baseada em um horário), uma chave pública e uma chave privada, onde com  esses dados é feito um hash e com isso torna-se possível acessar a API.


## INSTALANDO DEPENDÊNCIAS 
Deve criar um diretório para armazenar localmente todos os arquivos do projeto e incialndo uma aplicação node que irá uma arquivo packege.json
```
npm init
```

ALÉM DISSO, FAZ-SE NECESSÁRIO A INSTALAÇÃO DE ALGUMAS BIBLIOTECAS:

Node expres 
```
npm install --save express
```
O Express oferece soluções para: Gerenciar requisições de diferentes verbos HTTP em diferentes URLs.

Nodemon 
```
npm install --save nodemon
```
O Nodemon é uma ferramenta que auxiliar nas alteração que serão realizadas dentro do meu código, reiniciando a aplicação após mudanças. 

Axios

```
npm i axios
```

Axios é utilizado para realização de requisições, sendo  um cliente HTTP baseado em Promises. 

```
npm install --save body-parser
```


EXECUTANDO O CÓDIGO COM NODEMON 

```
{
  "name": "docker-example",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.1",
    "express": "^4.18.2",
    "nodemon": "^2.0.20"
  },
  "description": ""
}

```
##  CRIANDO APLICAÇÃO
Importando Bibliotecas Baixadaw
```
// import and create an express app
const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const axios = require("axios");
```

FUNCIONALIDADE DO CÓDIGO 

A aplicação desenvolvida tem como objetivo consumir API pública da Marvel e expressar via requisão axios e comunicação entre back e front-ende alguma informações referente a uma série de personagens. A API da marvel permite requisições através de "id" e daí surge um problema, uma vez que o id dos personagens não são sequências, o que dificulta na busca. Para facilitar a pesquisa foi realizada uma tradução de ID  para o Nomes dos Personagens.

TRADUÇÃO 

Foi criado dois vetores, um para os " id" e outros para os "nomes dos personogens", de forma que minha primeira requisição nada mais fosse que uma verificação dentro do vetor com os nomes dos personagens: ao passar o nome no meu front, há uma verificação dentro do meu vetor para saber se aquele personagem existe, caso exista a aplicação irá coletar o indice que aquele nome está localizado dentro do vetor "names"e utilizar para o obter o "id"de mesmo indece localizado do vetor "ids",onde esse id será utilizado para realizar a requisição na API atravéns do Axios que retornará as algumas informações do personagem pesquisado. 


```
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
    
};
```

## HTML para Requisição 

Criar na nossa pasta um arquivo chamdo index.html que será responsavel por salvar a entrada de dados do usuario e passa-la para a nossa aplicação node, para isso vamos criar um forms, ele recebe dois parametros importantes que nos ajudará na comunicação com nossa aplicação, o primeiro é o action, ele define a rota para qual os dados serão enviados, o segundo parametro define qual metodo HTTP será usado, como queremos enviar dados escolhemos o metodo POST. Dentro do corpo do form vamos passar um Input para o usuario entrar com seus dados e um botão para envio.


```
<form action="\", method="POST">
    <h1>Busca de Personagem</h1>
    <input type="teste" name="entrar">
    <button class="submit">enviar</button>
   
</form>
```


## Comunicação 

Para que a aplicação possa enxergar o que o usuário está solicitando é necessario que haja comunicação entre ambos, para isso tempo: 

```
app.get('/', (req, res) => 
    res.sendFile(__dirname+'/index.html'));
```

## Requisição  na API


```
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
```
