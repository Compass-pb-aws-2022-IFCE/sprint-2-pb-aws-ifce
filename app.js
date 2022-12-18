const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();

const port = 3333;

app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`);
});

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/summoner', require('./routes/summoner'));