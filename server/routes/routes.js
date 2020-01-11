const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//const uploader = require('../config/cloudinary-setup');

// AUTHORIZATION ROUTES
router.get('/loggedin', authController.loggedIn);
router.post('/signup', authController.signUp);
router.post('/login', authController.logInUser);
router.delete('/logout', authController.logOut);

module.exports = router