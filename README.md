API- MARVEL

CONSUMINDO API DA MARVEL ATRAVÉS DE NODE.JS

Foi desenvolvido uma aplicação para consumir uma API, onde com a realização de requisições é possível exibir informações de alguns personagens (nome e foto). Foi feito um back end em node, onde é consumido uma API externa via html para entrada de dados para a consulta, após isso tem o processo de conteinarização onde usando docker se cria um container com a aplicação.



API

Foi escolhido para o projeto a API pública da Marvel, no qual é possível obter vários recursos referentes às suas atribuições. Para o consumo desta API é preciso de um timestamp (uma variável baseada em um horário), uma chave pública e uma chave privada, onde que com e esses dados é feito um hash e com isso torna-se possível acessar a API.
