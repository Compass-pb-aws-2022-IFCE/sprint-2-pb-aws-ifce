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