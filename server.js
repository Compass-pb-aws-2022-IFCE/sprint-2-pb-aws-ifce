const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
const https = require("https");

// configuração do handle bars
app.set("views", path.join(__dirname, "views"));
app.engine(
  "handlebars",
  exphbs.engine({ extname: "handlebars", defaultLayout: "main" })
);
app.set("view engine", "handlebars");

//requisição:
app.get("/", async (req, res) => {
  https
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", (resp) => {
      let data = "";
      resp.on("data", (chunk) => {
        data += chunk;
      });

      //Exibir o resultado:
      resp.on("end", () => {
        let requisicao = JSON.parse(data);
        let img_info = {
          url: requisicao.url,
          descricao: requisicao.explanation,
          data: requisicao.date,
        };

        // renderiza a página:
        res.render("simple", { img_info });
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
});

app.listen("3000");