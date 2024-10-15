// routes/AuthRoute.js
const express = require('express');
const {test, signup, login , getAllUsers} = require('../Controllers/userController.js'); // Ensure this path is correct

const router = express.Router();


router.get('/', test);
// POST /signup
router.post('/signup', signup);

// POST /login
router.post('/login', login);
// GET /users
router.get('/user-info',getAllUsers); // Add this line to get all users

module.exports = router;
