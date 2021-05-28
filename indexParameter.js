var express = require("express")
var app = express()
const PORT = 3000;
const path = require("path")

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})


app.get('/product_id/:id', function (req, res) {

    var id = req.params.id
    if (id > 0 && id <= 3) {
        res.sendFile(path.join(__dirname + "/static/strona" + id + ".html"))
    }
    else
        res.send("taki user nie istnieje")
});
