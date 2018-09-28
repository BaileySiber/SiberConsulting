const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI);
//
// const Message = mongoose.model('Message', {
//   name: String,
//   email: String,
//   subject: String,
//   message: String
// })

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())

// app.get('/api/test', function(req, res) {
//   res.send('success');
// });
//
// app.post('/api/contact', function (req, res) {
//   console.log(req.body)
//   new Message(req.body)
//     .save()
//     .then((result) => res.json(result))
//     .catch((err) => res.status(500).end(err.message))
// });


app.listen(process.env.PORT || 3001);
