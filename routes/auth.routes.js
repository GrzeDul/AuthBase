const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/user/no-permission' }),
  (req, res) => {
    res.redirect('/user/logged');
  }
);

router.post('/logout', function (req, res, next) {
  try {
    req.logout();
    res.redirect('/');
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
