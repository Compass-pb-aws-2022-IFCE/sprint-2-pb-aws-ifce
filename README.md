API- MARVEL

CONSUMINDO API DA MARVEL ATRAVÉS DE NODE.JS

Foi desenvolvido uma aplicação para consumir uma API, onde com a realização de requisições é possível exibir informações de alguns personagens (nome e foto). Foi feito um back end em node, onde é consumido uma API externa via html para entrada de dados para a consulta, após isso tem o processo de conteinarização onde usando docker se cria um container com a aplicação.



API

As APIs são um conjunto de padrões que fazem parte de uma interface e que permitem a criação de plataformas de maneira mais simples e prática para desenvolvedores. A partir de APIs é possível criar softwares, aplicativos, programas e plataformas diversas
Para o projeto foi escolhida uma API pública da Marvel, no qual é possível obter vários recursos referentes às suas atribuições. Para o consumo desta API é preciso de um timestamp (uma variável baseada em um horário), uma chave pública e uma chave privada, onde com  esses dados é feito um hash e com isso torna-se possível acessar a API.


INSTALAÇÃO DAS DEPENDÊNCIAS

Deve-se criar um diretório para armazenar localmente todos os arquivos do projeto e incialndo uma aplicação node que irá um arquivo packege.json


npm init

ALÉM DISSO, FAZ-SE NECESSÁRIO A INSTALAÇÃO DE ALGUMAS BIBLIOTECAS:


Node express


npm install --save express

O Express oferece soluções para: Gerenciar requisições de diferentes verbos HTTP em diferentes URLs.


Nodemon

npm install --save nodemon

O Nodemon é uma ferramenta que auxiliar nas alterações que serão realizadas dentro do meu código, reiniciando a aplicação após as mudanças.


Axios


npm i axios

Axios é utilizado para realização de requisições, sendo um cliente HTTP baseado em Promises.
