const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const request = require("request");
const Anime = require("./models/Anime")
// const https = require('node:https');

// ler JSON
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Funcionando");
});

//body parser
app.use(bodyParser.urlencoded({ extended: false }));

// express-handlebars
app.set("views", path.join(__dirname, "views"));
app.engine(
  "handlebars",
  exphbs.engine({ extname: "handlebars", defaultLayout: "main" })
);
app.set("view engine", "handlebars");

// static folder
app.use(express.static(path.join(__dirname, "public")));

// rota inicial da aplicação
app.get("/", (req, res) => {
  res.render("index");
});

// res.json({"msg": "Funcionando"});
const PATH_API = "https://api.jikan.moe/v4";


app.get("/busca", (req, res) => {
  let search = req.query.anime;
  // console.log("Busca por: " + search);
  
  request(
    `${PATH_API}/anime?q=${search}&sfw`,
    function (error, response, body) {
      console.log("Status:", response.statusCode);
      if (error) {
        console.log(error);
      } else {
        body_response = JSON.parse(body);

        let anime_id = body_response.data[0]["mal_id"];
        let titulo = body_response.data[0]["title"];
        let link_img = body_response.data[0]["images"]["jpg"]["large_image_url"];
        let sinopse = body_response.data[0]["synopsis"];
        let results = body_response.data[0];
        // res.json(results)

        console.log("mal id = ", anime_id);

        let anime = new Anime(anime_id, titulo, link_img, sinopse)
        console.log(anime)

        
        res.render("anime", {anime})

      }
    }
  );

});

// console.log("mal id = ", anime_id); //não acessa

app.get("/anime", (req, res) => {

  res.render("anime")

})