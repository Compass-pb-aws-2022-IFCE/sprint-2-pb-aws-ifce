
# API PÚBLICA CONSUMIDA EM NODEJS


#### Francisco Luan Ferreira Brito

Este repositório foi criado e desenvolvido para a avaliação da segunda sprint do programa de bolsas Compass.uol para formação em machine learning para AWS.

Este projeto trata-se da escolha de uma API pública para ser consumida com NODEJS, em uma página HTML simples.

## Sobre a API pública e a conclusão da avaliação

A API pública escolhida foi a TMDB, O Movie Database (TMDB) é um banco de dados de filmes e TV construído pela comunidade . 
Para a conclusão da avaliação foi necessário um estudo sobre HTML, CSS, JAVASCRIPT, uso de API's públicas e implementação do framework React Native.

Por recomendações e um estudo sobre as possibilidades de resolução da avaliação, resolvi utilizar React Native, tendo em vista que é possível consumir a API com NODEJS e possibilita também coloca-la em uma página HTML.

A partir desse estudo foi feito um passo a passo para conclusão da avaliação, veja a seguir:

#### Tecnologias e linguagens utilizadas:

- HTML - JAVASCRIPT - REACT NATIVE - NODEJS - AXIOS - API PÚBLICA TMDB 


## Impedimentos resolvidos durante a Sprint 2

Durante a resolução da sprint houveram alguns problemas na reprodução do código, sendo resolvida efetuando a atualizando do NPM.

Para ver a versão atual do seu NPM, use o seguinte comando no terminal:

```bash
  npm -v
```

Para atualizar siga o seguinte passo a passo:

https://acervolima.com/como-atualizar-o-npm/


### Recursos necessários.

 - [Visual Studio Code](https://code.visualstudio.com/)
 - [Node.js](https://nodejs.org/en/)
 - [API TMDB e CHAVE DA API](https://www.themoviedb.org/documentation/api)
 - [Como instalar o Node.js, NPM e o React](https://www.devmedia.com.br/como-instalar-o-node-js-npm-e-o-react-no-windows/40329)

### Etapas de desenvolvimento

- #### Instalação dos softwares necessários.
Primeiramente instale todos os softwares necessários no tópico acima.

 - #### Criação da pasta "sprint2" por exemplo.
Crie uma pasta para criação da aplicação, no caso foi criado a pasta "Sprint2".

- #### Uso do React para consumir utilizando nodejs.

```bash
npx create-react-app sprint2 
```

A partir desse momento será criado a aplicação usando react native, vale ressaltar que com isso é criado a pasta node_modules, e também alguns arquivos padrão para uso nessa aplicação, então não se assuste se o arquivo já estiver criado com esse comando.

Logo abaixo terá alguns passo a passos que foi feito para resolução da sprint, lembrando que alguns códigos já são pré-definidos pelo react, e alguns são da documentação da API TMDB.

- #### Instalação do axios para ligação com a API no terminal.

```bash
npm istall axios 
```
Com isso é feito a instalação do axios, para logo em seguida ser configurado no arquivo index.js .

- #### Arquivo App.js (Botão direito > Novo Arquivo > App.js):

Dentro do arquivo terá os seguintes códigos:

```bash
import React, {useState, useEffect} from 'react';
import './App.css';
import { api } from './config';

function App() {

  const [quadrinhos, setQuadrinhos] = useState([])
  const [title, setTitle] = useState('')


  useEffect(() => {
    if (title){
      api.get(`/3/search/movie?query=${title}`).then(({data}) => {
        setQuadrinhos(data.results);
      })
    } else {
      setQuadrinhos([])
    }
  }, [title])
  
  return (
    <div className='container'>
      <div className='content'>
        <input value={title} onChange={e=>setTitle(e.target.value)}></input>
        <div>
          {quadrinhos.length ? quadrinhos.map(e => <img src={`https://image.tmdb.org/t/p/w200/${e.poster_path}`}/>) : <h1>Digite um filme para busca</h1>}
          
        </div>
      </div>
    </div>
  );
}

export default App;

```
Vale lembrar que na instalação do React já é criado alguns arquivos e predefinições do framework, como algumas importações e arquivos de exemplo como icones do próprio react.
No código acima foi criado a function App, definição das Const e suas condições de efeito e retorno na API, onde foi definido em uma div o retorno de imagens da busca na API, no caso foi utilizado: e.poster_path | Essa informação de posters da API é feito em uma busca por meio da requisição e.poster_path . Caso o usuario queira solicitar o titulo do filme, apenas filmes do ano 2010, entre tantas outras possibilidades, todas podem ser aplicadas, e seus códigos são descritos por meio da documentação da API pública, que está listada em recursos necessários.

Em use effect foi definido o api.get, para quais informações serão buscadas na API.
Em outra DIV foi colocado a mensagem de texto ao usuário "Digite um filme para busca", para que o usuário possa saber exatamente a função do INPUT.


Neste código foi definido em useEffect par que na busca seja apresentado os posteres, sendo buscada na api, e o else é para quando o usuario apagar os caracteres no imput ou a API não encontrar o titulo do filme, deixar a tela em branco. Caso não seja feito assim o else, a tela fica congelada com a ultima busca encontrada na API. Por exemplo se você digitar "QDADCEFEFAAAEFEFV" no IMPUT, ele não vai aparecer nenhum poster da API, mas se digitar Harry potter, irá aparecer os posters e se apagado esses caracteres, retornará para a página em branco.

- #### Criação da pasta config > criação do arquivo index.js (Botão direito> Novo Arquivo> index.js):

```bash
import axios from 'axios';

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/plain",
    },
  };

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/",
    https:config,
    params: {
        api_key: process.env.REACT_APP_PRIVATE_KEY
    },
});
```

Aqui fica a configuração do AXIOS, que fará ligação com a baseURL da API TMDB. Vale ressaltar que existe dois arquivos index.js, mas este fica na pasta config.

- #### Outro arquivo que está no repositório é o Index.js, mas desta vez na raiz.

```bash
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```
Nele há a configuração de importação do react e definição da const root.

- #### Criação do arquivo .env (Botão direito> Novo Arquivo> .env):
 
 Esse arquivo é para colocar a chave da API, lembrando que precisa solicitar sua chave no site da API e colocar no código.

```bash
 REACT_APP_PRIVATE_KEY= coloque sua chave private key aqui
```

- #### Criação do arquivo App.css (Botão direito> Novo Arquivo> App.css):
```bash
.container {
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  background-color: gray;
  width: 100%;
  min-height: 95vh;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: white;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
```

Neste arquivo foi feito a estilização do projeto, definição das cores, centralização, fonte, tamanho entre outros.

Escolhi uma cor Cinza para diferenciar o fundo do texto, e a escolha da fonte do texto e a cor branco para melhor visualização.

### DOCUMENTAÇÃO API TMDB

Saliento novamente a importancia de acessar a documentação da API no site oficial, para a boa execução do código e modificação de acordo com a necessidade.
Toda a questão de links, pastas, buscas estão pré-definidas no site oficial.

https://developers.themoviedb.org/3/getting-started/introduction

### Inicialização do projeto:

No terminal do VSCODE:

```bash
  npm start
```

Com isso o projeto será executado no seu navegador, geralmente com localhost:3000.

Na aplicação tem o IMPUT que fizemos no código, onde está configurado para fazer a busca na API o nome do filme de sua escolha, e assim retornará os posters referente a sua busca no banco de dados da API TMDB.


Obs: Lembre-se que precisa ter a chave da API no código. No caso eu utilizei a Private-key.

Valeeu!

![harry](https://user-images.githubusercontent.com/108829048/208177971-d9997b14-bb3c-421a-a081-2269e0d61b5e.png)

## Autores

- [@luanferreira](https://github.com/fluanbrito)
## 🚀 Sobre mim
Sou um grande entusiasta e apaixonado por tecnologia, empreendedorismo e inovação. Hoje, estou a cursar o curso de Sistema de Informação pelo Instituto Federal, faço uso profissionalmente de ferramentas e me aprofundo em temas como Marketing, Machine Learning AWS, Metodologias ágeis, Gestão de Projetos, Programação Web, Administração de Sistemas, Redes de computadores, entre outros.
