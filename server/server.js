// this is our server
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 

const path = require('path');
const app = express();
const PORT = 3000;

const apiRouter = require('./routes/api');


// // Connect our MongoDB Database ------------------------
// const MONGO_URI = 'mongodb+srv://tdoan:z5LVOGd7smS0ItqI@cluster0.3rm1a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// mongoose.connect(MONGO_URI, {
//   // options for the connect method to parse the URI
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // sets the name of the DB that our collections are part of
//   dbName: 'charmander'
// })
//   .then(() => console.log('Connected to Mongo DB.'))
//   .catch(err => console.log(err));
// // -----------------------------------------------------


// Set our Express view engine as ejs --------------------
app.set('view engine', 'ejs');


// ------------------------ PUBLIC ROUTES --------------------------
// *** LOGIN PAGE HANDLING ***************
  // GET request to serve login.html on the route '/'
app.get('/', (req, res) => {
  res.render('../client/ejs/login');
});
  
app.get('/signup', (req, res) => {
  res.render('../client/ejs/signup');
});

app.get('/dashboard', (req, res) => {
  res.render('../client/ejs/dashboard');
});
// -------------------------------------------------------------------




//IF YOU WANT A REQUEST FROM SERVER
// app.get('/api')




app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))