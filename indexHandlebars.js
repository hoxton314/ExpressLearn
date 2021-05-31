const express = require("express")
var app = express()
const PORT = 3000;
const path = require("path")
const hbs = require('express-handlebars');
const bodyParser = require("body-parser")


var context = {
    subject: "ćwiczenie 4 - dane z tablicy, select",
    fields: [
        { name: "title" },
        { name: "author" },
        { name: "lang" }
    ],
    books: [
        { title: "Lalka", author: "B Prus", lang: "PL" },
        { title: "Hamlet", author: "W Szekspir", lang: "ENG" },
        { title: "Pan Wołodyjowski", author: "H Sienkiewicz", lang: "PL" },
        { title: "Zamek", author: "F Kafka", lang: "CZ" }
    ]
}

app.set('views', path.join(__dirname, '/handlebar/views'));         // ustalamy katalog views
app.engine('hbs', hbs({ defaultLayout: 'main.hbs' }));   // domyślny layout, potem można go zmienić
app.set('view engine', 'hbs');                           // określenie nazwy silnika szablonów

app.get("/", function (req, res) {
    res.render('index.hbs', context);   // nie podajemy ścieżki tylko nazwę pliku
    // res.render('index.hbs', { layout: "main.hbs" }); // opcjonalnie podajemy konkretny layout dla tego widoku
})


app.get("/form", function (req, res) {
    console.log(req.body)
})




















app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
app.use(bodyParser.urlencoded({ extended: true }));