const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const { check, validationResult } = require('express-validator');
const app = express();
app.use(express.json());
const jwt = require('jsonwebtoken');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
const Models = require('./models.js');

const Colognes = Models.Colognes;
// const Users = Models.User;

//local host
mongoose.connect('mongodb://localhost:27017/jfDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//combining morgan with the accessLogScream to log users who visit the website.
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {
  flags: 'a'
});
app.use(morgan('combined', { stream: accessLogStream }));

//automatically sends all files that are requested from within the public folder.
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to Jovolun Fragrance!');
});

app.get('/fragrances', (req, res) => {
  Colognes.find()
    .then((colognes) => {
      res.status(200).json(colognes);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error: ' + err);
    });
});

// app.get('/fragrancetwo', (req, res) => {
//   FragranceTwo.find()
//     .then((fragrances) => {
//       res.status(200).json(fragrances);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send('Error: ' + err);
//     });
// });

const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0', () => {
  console.log('Listening on Port ' + port);
});

// app.listen(8080, () => {
//   console.log('your app is listening on port 8080');
// });
