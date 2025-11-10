
const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controllers');
const authMiddleware = require('../middlewares/auth-middleware');

const signupSchema = require('../validator/auth-validator');
const loginSchema = require('../validator/auth-validator');
const validate = require('../middlewares/validate-middleware');

router.route("/").get(authControllers.home);

router.post("/register",authControllers.register); 

router.post("/login",authControllers.login);

router.get("/verify-token", authMiddleware, authControllers.verifyToken);

router.get("/user", authMiddleware ,authControllers.getUser);



module.exports = router;
