const nome = document.querySelector("#search")

nome.addEventListener("blur", (e) => {
    id = nome.value
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://api.disneyapi.dev/characters/${id}`, options).then(teste => {teste.json()
        .then(data => console.log(data))
    })
    .catch(err => console.log("Erro:" + err,message))
})
