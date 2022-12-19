  ### Avaliação Sprint 2 - Programa de Bolsas Compass.Uol
  * #### Objetivo: Aplicar os conhecimentos desenvolvidos durante a Sprint 2
 #### Tópicos usados:
 * Api
 * Javascript
 * Html
 
 ## Api escolhida: https://viacep.com.br/
#### Passos realizados:

* Instalação do modulo express:
```
npm install express
````
* Criação do arquivo app.js com os seguinte código:
```
function consultaEndereco(){
    let cep = document.querySelector('#cep').value;

    if(cep.length!==8){
      alert('Cep inválido');
      return;
    }
    
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response){
      response.json().then(function(data) {
        console.log (data)
        mostrarEndereco(data);
      })
    });
}
function mostrarEndereco(dados){
  let resultado = document.querySelector('#resultado');
  
  if (dados.erro){
    resultado.innerHTML = "Não foi possível localizar o endereço!";
  }else{
    
  }

  resultado.innerHTML = `<p>Endereço: ${dados.logradouro} </p> <p> Bairro:${dados.bairro} </p> Cidade:${dados.localidade} <p> Estado:${dados.uf} </p>`
  }
  ```
 *  Criação do arquivo index.html com o seguinte código:
                          

```
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>dados</title>
  <script src="app.js"></script>
</head>

<body>
<label>Digite seu cep: (formato 00000000)</label>
  <br>
      <input type="number" id="cep"/>
      <button onclick="consultaEndereco()">Consultar</button>
      <div id="resultado">
        <p>Seu endereço aparecerá aqui <p>


</body>

 </html>
```
Ao abrir o arquivo index.html em seu navegador é possível visualizar uma tela que pode ser inserido seu cep, a api retornará as informações do local caso o cep seja válido.


 
 