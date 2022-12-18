
//criando rota
const express = require('express');
const app = express();
const exphbs=require('express-handlebars');
const { url } = require('inspector');
const path=require('path');
require('dotenv').config();


const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, function(){
    console.log(`Testando o Express na porta ${PORT}`);
});

app.get('/', (req, res) => {
    const moedaBTC=req.query.BTC
    const test=process.env.url
    console.log(test);



    res.render("index");
});
