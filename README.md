# Avaliação Sprint 2
## API Jikan Moe

---
##  Descrição 

Essa aplicação faz uma busca de um anime na API Jikan Moe e a partir da requisição, retorna uma view do anime, com imagem e sinopse do mesmo.

## Desenvolvimento

As dependências necessárias foram:
- express
- express-handlebars
- body-parser
- request
- nodemon (como dev dependência)

O programa foi desenvolvido com uma rota principal: __"/"__ que diz respeito a tela inicial da aplicação.

Na mesma, o programa recebe uma busca e através do módulo _request()_ faz a requisição à API, depois cria um objeto "Anime" que contém os dados que serão usados, em seguida faz a chamada de _render("anime")_.


## Como utilizar o sistema

Primeiro, instalar as dependências:
~~~
npm install express express-handlebar  request body-parser
~~~
~~~
npm install nodemon --save-dev
~~~


Em seguida, rodar a aplicação:
~~~
npm start
~~~

---
---

