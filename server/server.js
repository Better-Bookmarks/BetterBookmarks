// this is our server
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 

const path = require('path');
const app = express();
const PORT = 3000;

const apiRouter = require('./routes/api');
const userController = require('./controllers/userController');

// Connect our MongoDB Database --------------------------
const MONGO_URI = 'mongodb+srv://dbAxolotl:ZuocjQXrbZimWYGD@cluster0.lhjif.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  // sets the name of the DB that our collections are part of
  dbName: 'BetterBookMarks'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));
// -------------------------------------------------------


// Set our Express view engine as ejs --------------------
app.set('view engine', 'ejs');
// Parse urlencoded body content & save to req.body
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// ------------------------------------------------------



// // ---------------------- GITHUB OAUTH ROUTE HANDLING ----------------------
// app.get('/github', (req, res) => {
//   res.redirect('https://github.com/login/oauth/authorize?client_id=d2488361cab711ad9de2');
// });

// app.get('/oauth-callback', 
//   ({ query: { code } }, res, next) => {
//     const body = {
//       client_id: 'd2488361cab711ad9de2',
//       client_secret: 'b9dd554efc50fcc73bc4824bd7c5a3801e7ded91',
//       code,
//     }
//     const opts = { headers: { accept: 'application/json' } };

//     axios
//       .post('https://github.com/login/oauth/access_token', body, opts)
//       .then((_res) => _res.data.access_token)
//       .then((token) => {
//         console.log('My token:', token);
//         res.locals.ssid = token;
//         res.redirect('/dashboard');
//         next();
//       })
//       .catch((err) => res.status(500).json({ err: err.message }));
//   }, 
//   cookieController.setSSIDCookie, 
//   // sessionController.startSession, 
//   (req, res) => {
//     // what should happen here on successful sign up?
//     res.redirect('/dashboard');
//   }
// );
// // -------------------------------------------------------------------------



// ------------------------ PUBLIC ROUTES --------------------------
// *** LOGIN PAGE HANDLING ***************
  // GET request to serve login.html on the route '/'
app.get('/', (req, res) => {
  res.render('../client/ejs/login');
});
  // POST request to /login (logging in the user)
app.post('/login',
  // MIDDLEWARE TO VERIFY USER
  userController.verifyUser,
  (req, res) => {
    res.redirect('/dashboard');
});
// ****************************************

// *** SIGN UP PAGE HANDLING **************
  // GET request to serve signup.html on the route '/signup'
app.get('/signup', (req, res) => {
  res.render('../client/ejs/signup');
});
  // POST request to /signup (signing up the user)
app.post('/signup', 
  // MIDDLEWARE TO CREATE USER
  userController.createUser,
  (req, res) => {
    console.log("requested body: ", req.body)
    res.redirect('/dashboard');
});
// ****************************************



// ----------------------- AUTHORIZED ROUTES ------------------------
app.get('/dashboard',
  // MIDDLE TO VERIFY USER
  (req, res) => {
    res.render('../client/ejs/dashboard');
});
// -------------------------------------------------------------------


// *** TOPICS PAGE HANDLING *****************
    // POST request to /topics (adding new topic to topics array)
app.post('/dashboard/:id', 
    // MIDDLEWARE TO CREATE NEW TOPIC
    (req, res) => {
        
        res.render('/dashboard', {output: req.params.id})
    }
)
// -------------------------------------------------------------------

//IF YOU WANT A REQUEST FROM SERVER
// app.get('/api')



// -------------------- 404 HANDLING ---------------------------------
app.use('*', (req,res) => {
  res.status(404).send('Not Found');
});
// ----------------- GLOBAL ERROR HANDLING ---------------------------
app.use((err, res) => {
  res.status(500).json('Internal Server Error: ', err)
});
// -------------------------------------------------------------------



app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

module.exports = app;