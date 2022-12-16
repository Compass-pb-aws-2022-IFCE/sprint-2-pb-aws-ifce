# Avaliação da Sprint 2

Documentação de como seguiu o desenvolvimento da avaliação da Sprint 2 do projeto de bolsas compass.UOL

## 📚 Para realização da avaliação, foram utilizados os seguintes conceitos e ferramentas estudados na Sprint 2:

###  -> NodeJs: Ambiente que possibilita a execução do JavaScript sem dependência do navegador

### -> API: Mecanismos que permitem que dois componentes de software se comuniquem usando um conjunto de definições e protocolos

## 📋 Objetivo

Consumir uma API pública do Spotify pelo nodejs



### 🖥️ Instalação

1° - Use o comando "git checkout" + nome da branch a ser utilizada, no caso desta forma:

![Logo do R](https://user-images.githubusercontent.com/80013300/205464530-4dd2a3ad-2046-42c0-af81-0abe7f10759b.png)

2° - Depois, dentro da pasta api, use o seguinte comando:

    npm install

3° - Por fim, entre em http://localhost:8888



### 🖥️ Desenvolvimento

1º - Primeiro, é necessário entrar no site https://developer.spotify.com/dashboard/applications, pois para o uso da API do Spotify é preciso criar uma aplicação nesse site, onde será gerenciado os tokens de acesso a API.

![Logo do R](https://user-images.githubusercontent.com/80013300/208096308-7dee16e3-5aa8-454e-924e-1209204441f0.png)

2º - Após criar a aplicação no site, vamos criar o projeto:

    npm init

Com isso, surgirá o arquivo package.json, nele é possível configurar as dependências que será utilizadas no projeto.

E então, vamos instalar as dependências necessárias:

    npm install express request querystring cors

Explicando as funcionalidades das dependências:
+ express : define as configurações comuns da aplicação web, como a porta a ser usada para conexão e a localização dos modelos que são usados para renderizar a resposta
+ cors : permite o acesso do front end com a API
+ querystring: permite analisar e restringir strings de consulta de URL

4º - Nesse próximo passo, vamos criar o arquivo app.js, e seguindo a documentação do Spotify nele será realizado todos os procedimentos para a autorização da API e sua utilização. Vamos dar destaque paras seguintes operações:

Utilizando-se das dependências instaladas, logo após, inserindo as credenciais do cliente e o endereço de redirecionamento:

![Logo do R](https://user-images.githubusercontent.com/80013300/208097637-85bc82b1-d46e-4084-8838-b5358167e67f.png)

5º - E depois, ao inserir o app.use(), que serve para montar a função de middleware específico. E os app.get(), que informa ao servidor o que fazer quando receber requests em uma determinada rota, temos o arquivo app.js finalizado

![Logo do R](https://user-images.githubusercontent.com/80013300/208098499-af7e02c6-208b-4994-bfcb-1b068bfbd7bb.png)
![Logo do R](https://user-images.githubusercontent.com/80013300/208098516-67736834-b569-4acb-b32a-cd035d594167.png)

Lembrando que a API vai está ouvindo na porta 8888, como mostrado acima em app.listen(8888);


7º - Agora, criando um arquivo HTML interativo que possibilita entrar na conta e após isso ser direcionado para as informações da conta logada:

![Logo do R](https://user-images.githubusercontent.com/80013300/208099126-6efc4fba-0296-4e34-b05b-dd5f7476b7cb.png)
![Logo do R](https://user-images.githubusercontent.com/80013300/208099137-b634d1d5-db51-4ac5-b0b0-ed6c6b50e94f.png)

8º - Agora, vamos testar. Vamos iniciar o app.js com o node da seguinte forma:

![Logo do R](https://user-images.githubusercontent.com/80013300/208099503-55578a58-62ed-4486-a7db-6859d69f883e.png)

Como podemos ver, o node está funcionando corretamente.


9º - Agora, indo em http://localhost:8888:

![Logo do R](https://user-images.githubusercontent.com/80013300/208096027-60c7321f-10b2-44df-8cfa-45f004e265de.png)

10º - Ao clicar em Entrar, temos que entrar com nossa conta Spotify, logo após, vamos ser direcionados para página que mostra informações do usuários.

![Logo do R](https://user-images.githubusercontent.com/80013300/208096012-4d7696d8-5dd5-4f8f-a873-fe70d78630a8.png)

11º - Por fim, podemos voltar no back-end e veremos que as informações do usuários também estão lá, portanto API do Spotify consumida.

![Logo do R](https://user-images.githubusercontent.com/80013300/208096021-028b88a7-9cb9-47ea-83c3-d17ad4ca0283.png)




### Conclusão
 O desenvolvimento dessa avaliação foi essencial para fixar certos conceitos estudados durante a Sprint 2, principalmente com nodejs. Com isso, o processo de consumir a API foi positiva em caráter de aprendizado, pois surgiram algumas dúvidas, que foram sanadas com auxílio dos instrutores e colegas, tornando a experiência ainda mais vantajosa.