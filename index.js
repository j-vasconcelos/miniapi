const express = require("express");
const app = express();

app.get("/aluno", (req, res )=> {
    let usuario = {
                    nome: "Joao Vasconcelos",
                    disciplina : "Topicos Especiais",
                    curso : "ADS"
    }
    res.send(usuario)
}) ;

app.get("/professores", (req, res )=> {
    let professores  = [ {
                    nome: "David Reis",
                    disciplina : "Topicos Especiais",
                    curso : "ADS"
    },
    {
        nome: "Alexandre Oliveira Garcia ",
        disciplina : "O danado do HASKELL",
        curso : "ADS"
}]
    res.send(professores);
}) ;

app.get("/unidade", (req, res )=> {
    let unidade = {
                    tipo: "FATEC",
                    nome : "Rubens Lara",
                    cidade : "Santos"
    }
    res.send(unidade)
}) ;

app.listen(3000, () => {
    console.log("funfando...");
})
