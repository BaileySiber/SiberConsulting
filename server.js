const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())

app.get('/api/test', function(req, res) {
  res.send('success');
});


app.listen(process.env.PORT || 3001);
