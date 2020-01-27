const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const uploader = require('../config/cloudinary-setup');

// AUTHORIZATION ROUTES
router.get('/loggedin', authController.loggedIn);
router.post('/signup', authController.signUp);
router.post('/login', authController.logInUser);
router.delete('/logout', authController.logOut);

// USER ROUTES
router.post('/newAuction', uploader.single('imageUrl'), userController.makeNewAuct);
router.post('/makeNewAuction', userController.makeNewAuct)

module.exports = router