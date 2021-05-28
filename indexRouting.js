var express = require("express")
var app = express()
const PORT = 3000;
const path = require("path")

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

//app.use(express.static('static'))

app.get("/", function (req, res) {
    console.log("ścieżka do katalogu głównego aplikacji: " + __dirname)

    //res.sendFile(path.join(__dirname + "/static/strona.html"))
    res.send('asdf')
})

app.get("/koty", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/pages/koty.html"))
})
app.get("/drzewa", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/pages/drzewa.html"))
})
app.get("/auta", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/pages/auta.html"))
})


