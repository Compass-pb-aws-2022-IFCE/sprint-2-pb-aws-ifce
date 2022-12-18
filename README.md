## __API RICK AND MORTY__
O projeto a seguir foi desenvolvendo utilizando os conhecimentos adquiridos durante a Sprint 2 do Programa de Bolsas Compass.uol / AWS e IFCE e consiste em consumir uma API externa utilizando Node.js e também criar uma página HTML. Para o andamento do projeto foi escolhida a API Rick and Morty que despõe de diversas informações sobre os personagens do referido desenho.

---
## Ferramenta e documentação utilizadas:
- [Noje.js](https://nodejs.org/en/)
- [Documentação API Rick and Morty](https://rickandmortyapi.com/documentation/)

## Passos
Após ter instalado o Noje.js através do link acima, para inicar o projeto foi utilizado o o seguinte comando, gerando o package.json
```
npm init 
```

Em seguida foi realizado a instalação do express que é uma ferramenta que facilita a comunicação entre o HTML e uma aplicação desenvolvida em node.js
```
npm install express
```

Em seguida, foi realizado a instalação do Nodemon, ferramenta que facilita a visualização de mudanças realizadas no script pois, após iniciado, não é necessário ficar rodando o arquivo repetidas vezes a cada alteração.
```
npm install nodemon
```
Logo após é necessário acessar o arquivo package.json e na inserir logo abaixo da linha Scripts, a instrução __"start": "nodemon <nome-do-projeto.js>"__

## Consumindo API 
Foi utilizada a biblioteca __axios__ para realiar a comunicação com a API e coletar os dados fornecedos, o axios retorna uma response que dentro dele tem o data que é a response já transformada em Json. Essa requisição acontece dentro de uma rota criada com o express através do método get. A rota principal exibe a página html contendo botões de redirecionamento de janelas, esse redirecionamento acontece quando ocorre o evento de click e direciona para a rota escolhida, sendo que cada uma delas exibe informações sobre personagens distintos, esses personagens são definidos mediante id presente no link da API ao qual o axios busca os dados. Por fim, a rota All exibe todos os personagens.

# Rodando APP
Após criar os arquivos index.html e script.js, para executar o app utilize o seguinte comando:
```
npm start
```

# Tela HTML
![telahtml](https://user-images.githubusercontent.com/103221427/208322071-1e58a377-bcfd-4376-a2d9-d6268fb4bda6.png)

# Resultado rota Morty Smith
![morty smith](https://user-images.githubusercontent.com/103221427/208322277-afab0bea-1d98-48e6-94c3-2a5ed6b43915.png)

# Consumindo API no terminal
![terminal](https://user-images.githubusercontent.com/103221427/208322330-d0a60e10-ae9e-4375-928c-1610d57e7daf.png)

# Conclusão
Esse projeto foi essencial tanto para rever alguns conceitos básicos de JavaScript como para guiar meu conhecimento acerca de API, a maior dificuldade para concluir foi entender como trabalhar com APIs e envolver o html, mas acredito que o tempo dedicado para desenvolver foi bastante proveitoso, pois consegui agregar bastante conhecimento principalmente sobre Node.js.
