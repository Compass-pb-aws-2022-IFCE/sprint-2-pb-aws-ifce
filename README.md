# _Avaliação Sprint 2_

## Descrição

Comsumo de uma API pública, fazendo o uso do nodejs e criar uma página html para fazer consultas pela API.

## Aplicações Utilizadas

- API(_https://docs.awesomeapi.com.br/api-de-moedas_);
- Visual Studio Code (VS Code);
- Postman;
- Git;
- Github.

## Desenvolvimento

A API escolhida para o desenvolvimento da atividade foi uma aplicação que apresenta a cotação do Real (BRL) em relação as moedas Dólar (USD), Euro (EUR) e Bitcoin (BTC). O resultado fo apresentado em uma página html ou pode ser visualizado pela porta _localhost:3005_.

Primeiramente, para construir a base para o desenvolvimento da aplicação, foi realizada a criação da pasta onde ficarçao os arquivos criados para o projeto, é importante que todos estejam localizados na mesma pasta. 

Utilizando o terminal do VS code, foi implementado o comando **_npm init_** , o qual inicia a criação do pacote json, onde ficam localizados as informações sobre o projeto como nome, versão, licensa e as bibliotecas utilizadas. 

Para instalar as bibliotecas utilizadas no projeto foi utilizado o comando npm install **<aplicação>**.
Algumas das bibliotecas utilizadas para o projeto foram: o framework **_express_** que permite gerenciar as requisições de diferentes verbos do HTTP, a **_express-handlebars_** que compila o template como um parâmetro e retorna uma função JavaScrip, a biblioteca **_axios_** que permite a integração do projeto com a API escolhida, a **_nodemon_** que permite que o servidor reinicie automaticamente, a biblioteca **_fs_** que fornece operações de I/O (Input/Output ou E/S, Entrada/Saída), e a biblioteca **_request_** que permite a troca de informações entre servidores.


Nessa etapa é feita a criação do arquivo **_api.js_** e **_index.html_**, no arquivo api.js é onde ficará o código principal. Abaixo é apresentado a primeria parte dos comandos, a requisição das bibliotacas que serão utilizadas.

**Chamando os modulos/bibliotecas no programa**
```sh
{
const request = require('request');
const express = require('express');
const axios = require('axios').default
const app = express();
const fs = require('fs');
}
```

Com todas as bibliotecas já instaladas, o arquivo _package.json_ devidamente criado e configurado, partimos para a criação do servidor.

### Contruindo servidor
 No arquivo api.js temos os comandos de requisição e ligação entre o servidor e a API, no HTML é feita a construção do layout para exibição dos dados no frontend.

No código a seguir, a biblioteca express é utilizada para fazer a requisição da porta 3005, e solicita a resposta ao servidor para que o projeto possa ser apresentado na saída da porta.

```sh
{
    app.use(express.static(__dirname + '/'))


    app.get('/', function(req,res){
        res.render("./index.html")
    })
    app.listen(3005, function() {
    });
}
```

### Consumindo a API

Nessa estapa do código é realizado o consumo da API, é utilizado a biblioteca _axios_ para fazer a ligação com as informações da API.

Para dar start no servidor é usado o comando **_node <arquivo>.js_**, no caso do nosso projeto: _node api.js_. Assim, é realizada a ligação com a porta do servidor e pode ser verificada se a requisição está funcionando com a exibição na mensagem "tudo certo" no terminal após o comando de start do servidor.

```sh
{
    const moedas = 'USD-BRL,EUR-BRL,BTC-BRL'


    const cotacao = (async() => {
        const {data} = await axios(`https://economia.awesomeapi.com.br/last/${moedas}`)
        
        fs.writeFile('monetario.json', JSON.stringify(data,null, 2),err => {
            if(err) throw new Error('Algo está errado')
            console.log('tudo certo')
        });
    })();
}
```

### Informações da API 

As informações que estão sendo requisitadas na API podem ser visualizadas abaixo. São dados sobre cotações, valor de alta e baixa de cada moeda em realação ao Real Brasileiro.

```sh
{
    {
  "USDBRL": {
    "code": "USD",
    "codein": "BRL",
    "name": "Dólar Americano/Real Brasileiro",
    "high": "5.3317",
    "low": "5.263",
    "varBid": "0.0015",
    "pctChange": "0.03",
    "bid": "5.314",
    "ask": "5.315",
    "timestamp": "1671226102",
    "create_date": "2022-12-16 18:28:22"
  },
  "EURBRL": {
    "code": "EUR",
    "codein": "BRL",
    "name": "Euro/Real Brasileiro",
    "high": "5.6695",
    "low": "5.583",
    "varBid": "-0.0197",
    "pctChange": "-0.35",
    "bid": "5.6243",
    "ask": "5.6275",
    "timestamp": "1671227995",
    "create_date": "2022-12-16 18:59:55"
  },
  "BTCBRL": {
    "code": "BTC",
    "codein": "BRL",
    "name": "Bitcoin/Real Brasileiro",
    "high": "89.048",
    "low": "88.473",
    "varBid": "67",
    "pctChange": "0.08",
    "bid": "88.518",
    "ask": "88.566",
    "timestamp": "1671376532",
    "create_date": "2022-12-18 12:15:32"
  }
}
}
```

### Exibindo no HTML

No arquivo HTML, utilizando a biblioteca **_fetch_** e fazendo uso da estrutura de repetição _FOR_, o programa percorre os dados e exibe na tela da página as informações solicitadas, neste caso o nome da moeda e o valor converdito para reais.

```sh
{
     <div class="container"></div>
    <script>
         (async() =>  {
            const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
            const data = await response.json()
            for(var item in data) {
                        document.querySelector('.container').innerHTML += (`<h3>${data[item].name} </h3>` +`<p>${data[item].code}1,00 -   ${data[item].codein}${data[item].ask} </p>` + `<hr/>` )
                    }
                })()
    </script>
}
```


Na imagem a seguir é apresentada a página em que os dados são exibidos:

![API](https://user-images.githubusercontent.com/103959633/208310594-2160dceb-6c0a-445c-8eb5-5f2d7fd17f74.jpg)

A página pode ser exibida tanto utilizando o arquivo **_index.html_** ou pelo endereço **_localhost:3005_**
