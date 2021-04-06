const express = require('express');
const Profile = require('../models/ProfilesModel');
const router = express.Router();

// Route to handle GET user to DASHBOARD
router.get('/getProfile', async (req, res) => {
  // console.log('testhere!!')
  console.log('The req.cookies is: ', req.cookies);
  res.locals.profile = await Profile.find({ _id: req.cookies.ssid })

//   console.log('the res.locals obj is: ', res.locals.profile);
  return res.status(200).json(res.locals.profile);
})

// Route to handle POST to INSERT a new TOPIC
router.post('/addTopic', (req, res) => {
  // req.body = { topics : [
  //    {'Oauth': {'url' : 'description'}}
  //  ]
  // }
  const topicsElement = req.body.topics;

  Profile.findOneAndUpdate(
    { _id: req.cookies.ssid },
    { $push: { topics: req.body.topics }},
    { new: true },
    (err, user) => {
      if (err) {
        return res.status(400).send('User profile was not found - could not update');
      } else {
        return res.status(200).json(user)
      }
  });
})





// Route to handle POST user request on LOGIN
// router.post('/login', (res,req) => {
//     // middleware to store username into variable
// })
// Route to handle POST user request on SIGN UP
// Route to handle POST to push url,description in Topics array

module.exports = router;
