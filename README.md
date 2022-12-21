# _Avaliação da Sprint 2_

Quero deixar registrado que houve um imprevisto de última hora, onde tentei adaptar uma outra API nessa minha construção e acabou não funcionando corretamente, assim ficando a atividade incompleta. Só que mesmo depois do prazo de entrega, fiquei estudando, buscando informações e ajuda à alguns colegas, na tentativa de refazer e fazer funcionar.
Com isso refiz tudo e subi uma nova atualização em todo o projeto.

---

## Objetivo:
- Criar uma aplicação NodeJS com capacidade de consumir uma API pública, criando uma página HTML na qual será responsável pelas consultas dessa API.

## 📚 Para a elaboração inicial desse projeto foram usadas as seguinte ferramentas e conceitos:
- API (https://www.mercadobitcoin.com.br/api-doc/)
- NodeJs (Funciona como um interpretador de JavaScript fora do ambiente do navegador web)
- VS Code (Editor de código aberto)

## Tentativas e Desenvolvimento
- A princípio o objetivo era consumir uma API de cotação de moedas, e com a mudança de última hora, aderi uma API de _criptomoeda_ na qual será informado o valor máximo e o mínimo das últimas 24 horas, dessa moeda pesquisada.
Primeiro passo foi usar o comando:
```
npm install
```
Com isso criou-se o arquivo “package.json” e assim o projeto foi iniciado.

Em seguida foi criado o arquivo “app.js” e logo após as instalações das dependências, como o próprio “express”(para fremework web), "axios", "body-parser" e o “nodemon” com o seguinte comando:
```
npm install express axios body-parser nodemon
```
- express: Facilita o desenvolvimento da aplicação;
- axios: Faz requisições e pode ser usado tanto no navegador quanto no NodeJs;
- body-parser: Capaz de converter o _body_ da requisição para vários formatos;
- nodemon: Faz com que tenhamos uma atualização imediata no servidor web, ou seja, não precisa ficar reiniciando o servidor sempre que fizer uma alteração;

## Arquivo package.json
- Dentro desse arquivo que foi gerado conforme as aplicações anteriores, na seção de scripts adicione "dev": "nodemon app.js" para que o código seja executado com o nodemon.

![Captura de Tela (105)](https://user-images.githubusercontent.com/106123150/208814280-55ff0b28-8b3b-457c-8d6a-620c7d1e2662.png)

### Arquivo app.js com a criação da rota
- Primeiramente iremos importar e instânciar as bibliotecas baixadas. Em seguida algumas ressalvas: O "req" e "res" são os objetos de requisição e resposta enquanto o "res" é usado para responder a solicitação de uma determinada rota, o "req" é responsável por fazer a requisição desses dados.
**OBS:** no momento que será mandado dados via "form", esse pacote formata e transforma os dados para o formato de objeto javascript e joga tudo isso em um objeto dentro do objeto de requisição (req): req.body.
Agora, paara que o arquivo seja mostrado ao usuário ao carregamento da página, basta passar o caminho do "index.html" dentro da função da rota raiz, atravéz do comando _res.sendFile()_ e para facilitar esse caminho é usado o "__dirname", onde ele pega o caminho até esta pasta, bastando concatenar com "/index.html".
- Outra observação: será usado um comandinho dentro do "res.send(``)" para termos uma atualização da página ao clicar em "voltar" na página do navegador.
- Depois de montar toda a lógica do projeto, inseriremos a URL dessa api e determinaremos as respectivas menssagens de retorno para o navegador.
- Nessa aplicação também é determinada em qual porta será rodado o servidor.

![Captura de Tela (103)](https://user-images.githubusercontent.com/106123150/208813812-b9f40676-ef40-4e80-90cf-7b68c914d060.png)

**Obs:** A porta configurada foi a _localhost:3000_

### Arquivo index.html
- será responsavel por salvar a entrada de dados que o usuário passará para a nossa aplicação nodejs, com isso será criado um "forms", no qual receberá dois parâmetros que ajudará na comunicação com a aplicação. O "action", ele define a rota para qual os dados serão enviados e o "post", que define qual método HTTP será usado, já que queremos enviar dados. Dentro do corpo do "form" será passado um "input" onde o usuário entrará com os dados e clicará em um botão para "enviar".

![Captura de Tela (107)](https://user-images.githubusercontent.com/106123150/208818863-06043f6f-ece5-4099-8ac8-e1a93b1908d7.png)

### Imagens da página retornada pelos dados usados:
![Captura de Tela (110)](https://user-images.githubusercontent.com/106123150/208822676-0e54cddb-04d2-4d27-88e7-ba941dfc3d0f.png)
![Captura de Tela (111)](https://user-images.githubusercontent.com/106123150/208822849-7b8d9f06-1294-408b-ae54-8dfe0319b301.png)

### Conclusão
- Após várias tentativas, tanto antes como depois do prazo, entrego agora um projeto atualizado e funcionando corretamente.

