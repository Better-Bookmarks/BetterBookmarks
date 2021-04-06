const Profile = require('../models/ProfilesModel');
// const bcrypt = require('bcryptjs');
// const mongoose = require('mongoose');
const userController = {};


// createUser - middlewre to create and save a new uUser into the database ----------------
userController.createUser = (req, res, next) => {
  // Input Checking --------------------------------------------
  let regex = /\W/; // Checking for Non-Alphanumerics
  if ( req.body.username === '' || req.body.password === '' || regex.test(req.body.username) || regex.test(req.body.password) ) {
    // If a post request gets sent with invalid info, return this error:
    res.render('./../client/signup', {error: "Sorry, that's not a valid user/password!"});
  } else {
    Profile.create(
      req.body, // req.body === { username: CLIENT_TEXT, password: CLIENT_PW }
      (err, user) => {
        // Check if profile create threw error
        if (err) return (next(err));
        // If no error, print to console
        
        console.log('Request body: ', req.body);
        console.log('Successfully create user!');
        // console.log('The password is: ', user.password);
        // Save this to res.locals for later use
        res.locals.user = user; // for cookies
        // go to Next middlewares
        return next();
      }
    );
  }
}
// ----------------------------------------------------------------------------------------


// verifyUser - middleware to verify user and password exists in the users database -------
userController.verifyUser = (req, res, next) => {
  
  const { username, password } = req.body;

  // req.body === { username: CLIENT_TEXT, password: CLIENT_PW }
  Profile.findOne({username}, (err, user) => {
    // console.log('The req.body.password is: ', password);
    // do stuff
    if (err) {
      // handle error
      return next('Error in userController.verifyUser: ' + JSON.stringify(err));
    // handle no user found situation
    } else if (!user) {
      res.redirect('/signup')
    } else {
      // console.log('The user.password is ',user.password);
      if(password === user.password){
        // console.log('success!!')
        res.locals.user = user;
        return next();
        // return res.send('found password!!!');
      }
    }
      // bcrypt.compare(req.body.password, user.password)
      //   .then(
      //     // do stuff
      //   )
    
  })

};
// ----------------------------------------------------------------------------------------


// setSSIDCookie - middleware to store the user id in a cookie ----------------------------
userController.setSSIDCookie = (req, res, next) => {
  console.log('The res.locals in userController is: ', res.locals);
  res.cookie('ssid', res.locals.user.id, { httpOnly: true });
  next();
}
// ----------------------------------------------------------------------------------------


// createTopic - middleware to create and save new topic into the database -------------
userController.createNewTopic = (req, res, next) => {


  
}


module.exports = userController;