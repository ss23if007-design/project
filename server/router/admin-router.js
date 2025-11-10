const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/admin-controllers');
const authMiddleware = require("../middlewares/auth-middleware")
const adminMiddleware = require("../middlewares/admin-middleware")


router.route("/user").get(authMiddleware, adminMiddleware, AdminController.getAllUsers);
router.route("/appointments").get(authMiddleware, adminMiddleware, AdminController.getAllappointments);
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, AdminController.deleteUserbyId);
router.route("/users/:id").put(authMiddleware, adminMiddleware, AdminController.getUserbyId);
module.exports = router;

