const submit = document.querySelector("#button")
document.querySelector("#search").classList.remove("hide")
const home = document.querySelector("#home")


const showData = (show => {
    const results = document.querySelector("#results-container") 
    results.classList.remove("hide")
    document.querySelector("#search").classList.add("hide")
    for (const i in show.data){
            if(document.querySelector("#name").value == show.data[i].name){
                for (j in show.data[i].tvShows){
                    document.querySelector("#tvShows").innerHTML = show.data[i].tvShows[j] + ', '
                }
                document.querySelector("#result-name").innerHTML = show.data[i].name
                document.querySelector("#imageUrl").innerHTML = `<img src="${show.data[i].imageUrl}" id="image">`
            }
            
    }
})

submit.addEventListener("click", () => {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://api.disneyapi.dev/characters/`, options).then(result => {result.json()
        .then((data) => {
            showData(data)    
        })
    })
    .catch(err => console.log("Erro:" + err,message))
})

home.addEventListener("click", () => {
    document.querySelector("#results-container").classList.add("hide")
    document.querySelector("#search").classList.remove("hide")
})
