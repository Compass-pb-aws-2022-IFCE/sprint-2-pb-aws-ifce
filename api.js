const request = require('request');
const express = require('express');
const axios = require('axios').default
const app = express();
const fs = require('fs');

//servidor

app.use(express.static(__dirname + '/'))


app.get('/', function(req,res){
    res.render("./index.html")
})
app.listen(3005, function() {
});


//chamando API: https://economia.awesomeapi.com.br/json

const moedas = 'USD-BRL,EUR-BRL,BTC-BRL'


    const cotacao = (async() => {
        const {data} = await axios(`https://economia.awesomeapi.com.br/last/${moedas}`)
        
        fs.writeFile('monetario.json', JSON.stringify(data,null, 2),err => {
            if(err) throw new Error('Algo está errado')
            console.log('tudo certo')
        });
    })();
   


