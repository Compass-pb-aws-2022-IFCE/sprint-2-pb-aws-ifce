# Avaliação Sprint 2 - Pesquisa de personagens da Disney

A seguinte aplicação realiza uma pesquisa por nome de personagens de obras da Disney, utilizando sua API pública para puxar os dados de nome, obra e uma imagem do personagem em questão.

A API utilizada para a aplicação está disponível em: https://api.disneyapi.dev/characters/

---

## Como Funciona
A aplicação trata de um site simples com um campo de pesquisa e um botão de envio da pesquisa. Ao digitarmos um nome válido de um personagem da Disney e clicarmos em "Pesquisar", a aplicação consulta a API por uma correspondência e retorna nome, obra e uma imagem do personagem solicitado. 

**OBS: Esta aplicação requer o Node.js instalado**

## Como executar
- Abra um terminal no diretório em que se encontra a aplicação
- Execute o comando `npm i express nodemon` para instalar as bibliotecas necessárias para a execução do código ;
- Execute o comando `npm run dev` para iniciar o servidor local da aplicação;
- No navegador, digite o endereço `localhost:3000`. Em caso de sucesso, será exibida uma tela com um campo de pesquisa como especificado no começo deste documento.;

