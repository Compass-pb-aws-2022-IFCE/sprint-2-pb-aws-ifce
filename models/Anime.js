// const request = require("request");
// const PATH_API = "https://api.jikan.moe/v4";

class Anime {
    constructor(id, nome, link_img, sinopse) {
        this.id = id;
        this.nome = nome;
        this.link_img = link_img;
        this.sinopse = sinopse;
    }

    get getNome() {
        return this.nome;
    }

    get getLink_img(){
        return this.link_img;
    }

    get getSinopse(){
        return this.sinopse;
    }
}

module.exports = Anime;