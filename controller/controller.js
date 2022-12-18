const axios = require('axios');

module.exports = {
    async pesquisarPerfilGitHub(request,response) {
        const { name } = request.params;
        var nome, bio, imagem;
        
        await axios.get('https://api.github.com/users/' + name).then(function(resposta) {
            console.log(resposta.data);

            nome = resposta.data.name;
            bio = resposta.data.bio;
            imagem = resposta.data.avatar_url;
            followers = resposta.data.followers;
            following = resposta.data.following;
            loc = resposta.data.location;

            return response.send('<html> <head> <style type="text/css">body{background: rgb(63,94,251);text-align: center; font-family: helvetica; margin-top: 75px;} img{ border: #fff solid 7px; border-radius: 15px;} span{margin-right: 6px; font-size: 20px; font-weight: bold;}</style> </head> <body translate="no"> <h1>' +nome+ '</h1> <p>📌 ' +loc+ '</p> <img src="' +imagem+ '"/> <h2>' +bio+ '</h2> <span>Seguidores: '+followers+'</span> <span>Seguindo: '+following+'</span> </body> </html>')

        }).catch((err) => {
            response.json({msg:"Perfil não encontrado! "+ err});
        })
    }
}
