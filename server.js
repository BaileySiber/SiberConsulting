const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'build')));

app.use(express.static(__dirname + '/scss'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname +'/scss'));
});



app.listen(process.env.PORT || 3001);
