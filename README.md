# Compass UOL 
## Consumindo api do star wars com node



Tecnologias usadas:
- Node js;
- Express js;
- Git.
- Axios



## Descrição 
O presente trabalho tem o objetivo de consumir uma API do star wars usando tecnologias como: Node, express, axios entre outras. 




## Instalação

Iniciamos o trabalho criando uma pasta chamada express_app, foi usado o seguinte comando:

```sh
mkdir express_app 
cd express_app
```
Após, foi instaladas as bibliotecas necessaria para a continuação do projeto com os seguintes comandos:
```sh
npm install axios
npm install express
npm install body-parser
```

Em seguida, foi criada um arquivo no vs code chamado app.js.
```sh
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
    <p>Planeta:${data.name}</p>
    <p>População:${data.population}</p>
    <p>Diametro:${data.diameter}</p>
    <a href="/">voltar</a>
    `)
})




app.listen(3000, () => {
    console.log("app running on por 3000...");
})
```
No código acima, está acontecendo uma requisição de uma API para buscar os dados requerentes do planeta escolhido, informações como: Clima, diâmetro, população e periodo de rotação. 
 
Depois, foi usado o seguinte comando para inicializar o projeto e criar um package.json 
```sh
npm init
```

Isso inicializara os scripts, dependências e versões. 


Por fim, foi dado o comando para inializar o servidor.
```sh
node app.js
```

Fazendo assim que crie um localhost na porta 3000 exibindo uma página HTML para a inserir o nome do planeta. 
