# Avaliação Sprint 2 - Programa de Bolsas Compass.uol / AWS e IFCE

Avaliação da segunda sprint do programa de bolsas Compass.uol para formação em machine learning para AWS.




Este projeto trata-se da escolha de uma API pública para ser consumida com NODEJS, em uma página HTML simples.

A escolhida foi a  VIA CEP que após a inserção do CEP retorna informações tais como: BAIRRO, RUA, CIDADE, ESTADO E NÚMERO CADASTRADO NO IBJE. 

Tecnologias e linguagens utilizadas:

HTML - JAVASCRIPT – API VIA CEP 


1. Inicialmente Clonei o repositório do GIT em minha máquina local através do GIT Bash

![image](https://user-images.githubusercontent.com/46223150/208496135-ae611dce-8468-498c-a319-33ce537b5220.png)


git clone https://github.com/Compass-pb-aws-2022-IFCE/sprint-2-pb-aws-ifce.git

1.	CRIAÇÃO DE PÁGINA SIMPLES .HTML

No VsCode criei um arquivo chamado index.html dentro do diratório sprint-2-pb-aws-ifce onde irei construir o conteúdo a ser exibido no site e ficou da seguinte maneira:


<html>
  <head>
  <title>Consulta Informações por CEP </title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />


 
  </head>

  <body>

    <script type="text/javascript" src="script.js"></script> // Optei por inseriria chamada do script dentro do body

  <h1>Seja bem vindo ao Busca CEP</h1>
  <p> Insira o CEP que deseja realizar a consulta sem pontos e traços da seguintes maneira: 63010245 </p>    
  
  <form method="get" action="."> // formulário para busca das informações através do CEP
      <label>CEP:
      <input name="cep" type="text" id="cep" value="" size="10" maxlength="9"
             onblur="pesquisacep(this.value);" /></label><br />
      <label>RUA:
      <input name="rua" type="text" id="rua" size="60" /></label><br />
      <label>BAIRRO:
      <input name="bairro" type="text" id="bairro" size="40" /></label><br />
      <label>CIDADE:
      <input name="cidade" type="text" id="cidade" size="40" /></label><br />
      <label>ESTADO:
      <input name="uf" type="text" id="uf" size="2" /></label><br />
      <label>NÚMERO IBGE:
      <input name="ibge" type="text" id="ibge" size="8" /></label><br />
    </form>
  </body>

  </html>


  2. Script para busca através do CPF no VIA CEP

  function limpa_formulário_cep() {
        //Limpa valores do formulário de cep.
        document.getElementById('rua').value=("");
        document.getElementById('bairro').value=("");
        document.getElementById('cidade').value=("");
        document.getElementById('uf').value=("");
        document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
        document.getElementById('ibge').value=(conteudo.ibge);
    } 
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}
    
function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";
            document.getElementById('ibge').value="...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } 
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } 
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};

