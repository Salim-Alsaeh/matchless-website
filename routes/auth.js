const express = require("express");
const {
    register,
    login,
    getMe
} = require("../controllers/auth");

const router = express.Router();
// importing protect from middleware to protect the desired routs
const { protect } = require('../middlewares/auth');
// routing to the correct controller
router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);


module.exports = router;
