var express = require("express")
var app = express()
const PORT = 3000;
const path = require("path")
const bodyParser = require("body-parser")


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static('static'))

let users = [
    { nick: "111", email: "111@w.pl" },
    { nick: "222", email: "222@w.pl" },
    { nick: "333", email: "333@w.pl" }
]
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}




app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/addUser.html"))
})



app.post("/handleForm", function (req, res) {
    let dane = req.body
    let check

    console.log(dane)

    users.forEach(element => {
        if (element.email == dane.email) {
            check = true
        }
    });

    if (check) {
        res.send("taki mail już jest w bazie")
    } else {
        if (validateEmail(dane.email)) {
            users.push({ nick: dane.nick, email: dane.email })
            console.log(users)
            res.send("Email dodany do bazy")
        } else {
            res.send("email jest niepoprawny")
        }

    }

    //res.send()
})

app.get("/removeUserBySelect", function (req, res) {
    let selectSend = '<form action="/removeUserBySelect" method="POST">'
    selectSend += '<label for="email">Wybierz usera do usunięcia:</label>'
    selectSend += '<select onchange="this.form.submit()" name="email" id="email">'
    selectSend += '<option disabled selected value> -- select an option -- </option>'
    users.forEach(element => {
        selectSend += '<option value="' + element.email + '">' + element.email + '</option>'
    });
    selectSend += '</select></form>'
    res.send(selectSend)
})
app.post("/removeUserBySelect", function (req, res) {

    let dane = req.body
    console.log(dane)
    users = users.filter(user => user.email != dane.email)
    console.log(users)
    res.send("użytkownik o emailu " + dane.email + " został usunięty")
})


app.get("/removeUserByRadio ", function (req, res) {
    let selectSend = '<form action="/removeUserBySelect" method="POST">'
    selectSend += '<label for="email">Wybierz usera do usunięcia:</label>'
    users.forEach(element => {
        selectSend += '<input id=' + element.email + ' onchange="this.form.submit()" type="radio" value="' + element.email + '">' + element.email + '<label for="' + element.email + '">Mail</label>'
    });
    selectSend += '</form>'
    res.send(selectSend)
})
app.get("/removeUserByCheckbox", function (req, res) {
    res.send()
})