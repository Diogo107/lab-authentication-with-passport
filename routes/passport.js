'use strict';

const { Router } = require('express');
const passportRouter = Router();

// Require user model
const User = require('../models/user');
// Add bcrypt to encrypt passwords
const bcrypt = require('bcrypt');
const bcryptSalt = 10;
// Add passport

const ensureLogin = require('connect-ensure-login');

passportRouter.get('/private-page', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  const user = req.user;
  res.render('passport/private', {
    user
  });
});

//Is this?
passportRouter.get('/sign-up', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  const user = req.user;
  res.render('passport/sign-up', {
    user
  });
});

module.exports = passportRouter;
