const express = require("express")
var app = express()
const PORT = 3000;
const path = require("path")
const hbs = require('express-handlebars');
const bodyParser = require("body-parser")

var context = require("./data/data01.json")
console.log(context)


app.set('views', path.join(__dirname, '/views'));         // ustalamy katalog views

app.engine('hbs', hbs({ defaultLayout: 'main.hbs' }));   // domyślny layout, potem można go zmienić
app.set('view engine', 'hbs');                           // określenie nazwy silnika szablonów


app.get("/", function (req, res) {
    res.render('index01.hbs', context);   // nie podajemy ścieżki tylko nazwę pliku
    // res.render('index.hbs', { layout: "main.hbs" }); // opcjonalnie podajemy konkretny layout dla tego widoku
})


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
























