const express = require('express');
const authController = require('../controllers/auth.controllers');

const router = express.Router();

router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/logout', authController.logout);
router.post('/verify', authController.verify);

module.exports = router;
