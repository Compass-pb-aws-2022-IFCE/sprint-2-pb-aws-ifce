const submit = document.querySelector("#button")
document.querySelector("#search").classList.remove("hide")
const home = document.querySelector("#home")


const showData = (show => {
    document.querySelector("#results-container").classList.remove("hide")
    document.querySelector("#search").classList.add("hide")
    for (const i in show.data){
            if(document.querySelector("#name").value == show.data[i].name){
                document.querySelector("#tvShows").innerHTML = show.data[i].tvShows
                document.querySelector("#result-name").innerHTML = show.data[i].name
                document.querySelector("#imageUrl").innerHTML = `<img src="${show.data[i].imageUrl}" id="image">`
                return;
            }      
    }
})

submit.addEventListener("click", () => {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    for(let id = 1; id <= 149; id++){
        fetch(`https://api.disneyapi.dev/characters?page=${id}`, options).then(result => {result.json()
            .then((data) => {
                showData(data)    
            })
        })
        .catch(err => console.log("Erro:" + err,message))
    }
})

home.addEventListener("click", () => {
    document.querySelector("#results-container").classList.add("hide")
    document.querySelector("#search").classList.remove("hide")
})
