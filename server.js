const express = require('express');
const path = require('path');
const app = express();

var http = require("http");
setInterval(function() {
    http.get("https://siberconsultingsite.herokuapp.com/");
}, 1500000);


app.use(express.static(path.join(__dirname, 'build')));

app.use(express.static(__dirname));

app.get('/*', function(req,res) {
res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 3001);
