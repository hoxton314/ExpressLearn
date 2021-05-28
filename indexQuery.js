var express = require("express")
var app = express()
const PORT = 3000;
const path = require("path")

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})




app.get('/', function (req, res) {
    console.log(req.query.bg)
    //http://localhost:3000/?count=4&bg=red
    let color = req.query.bg
    let count = req.query.count
    let obj = ''
    let div
    for (let i = 0; i < count; i++) {
        div = '<div id=' + i + ' style="width:100px;height:100px;border:1px solid black;background-color:' + color + ';"> </div>'
        obj += div
    }
    console.log(obj)
    res.send(obj) // odesłanie obiektu z danymi z powrotem do przeglądarki   
});


