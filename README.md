# _Avaliação da Sprint 2_

Quero deixar registrado que houve um imprevisto de última hora, onde tentei adaptar uma outra API nessa minha construção e acabou não funcionando corretamente, assim ficando a atividade incompleta.

---

## 📚 Para a elaboração inicial desse projeto foram usadas as seguinte ferramentas e conceitos:
- API (https://www.mercadobitcoin.com.br/api-doc/)
- NodeJs (Funciona como um interpretador de JavaScript fora do ambiente do navegador web)
- VS Code (Editor de código aberto)

## Tentativa do Desenvolvimento
- O objetivo era consumir uma API de cotação de moedas, no qual seu resultado espelharia em uma página HTML.
A princípio foi usado o comando:
```
npm install
```
Com isso criou-se o arquivo “package.json” e assim o projeto foi iniciado.

Em seguida foi criado o arquivo “app.js” e em seguida as instalações das dependências, como o próprio “express”(para fremework web) e o “nodemon” com os seguintes comandos:
```
npm install express
```
- express: Facilita o desenvolvimento da aplicação;
```
npm install express-handlebars
```
- express-handlebars: Renderiza a página HTML na rota;
```
npm install -D nodemon
```
 - nodemon: Faz com que tenhamos uma atualização imediata no servidor web, ou seja, não precisa ficar reiniciando o servidor sempre que fizer uma alteração;
 
 ###  O arquivo .env
 - Contém a URL base da API
 ![Captura de Tela (92)](https://user-images.githubusercontent.com/106123150/208342955-9be9a4f9-e38e-41a5-8abf-f4a4ef144820.png)
 
### Construção do arquivo app.js com a criação da rota
- Nessa aplicação é determinada em qual porta será rodado o servidor setando a pasta views onde se encontra os templates html.
```
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
```

**Obs:** A porta configurada foi a _localhost:3000_

### O arquivo main.handlebars
- Template da construção do html.
![Captura de Tela (91)](https://user-images.githubusercontent.com/106123150/208344150-2939e0cb-df89-451f-b9a8-1d1cad1464f6.png)

### Imagem da página retornada pelos dados usados.
![Captura de Tela (93)](https://user-images.githubusercontent.com/106123150/208344811-17ae4746-527f-4a4a-9446-a83e01420507.png)

### Conclusão
- Projeto incompleto. Resolvi descrever o que havia tentado refazer de ultima hora, não tendo mais tempo nem cabeça para contruir tudo do zero novamente (sendo que já era a 4 tentativa de APIs). E com isso preferi enviar o que eu tinha de fato, ao invés de não subir nada.
