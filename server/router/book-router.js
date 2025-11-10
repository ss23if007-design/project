
const express = require('express');
const router = express.Router();
const {Booking_Form, getUserAppointments} = require('../controllers/book-controllers');
const BookControllers = require('../controllers/book-controllers');
const authMiddleware = require('../middlewares/auth-middleware');

router.route("/booking").post(authMiddleware, BookControllers.Booking__Form);
router.route("/my-appointments").get(authMiddleware, BookControllers.getUserAppointments);

module.exports = router;
