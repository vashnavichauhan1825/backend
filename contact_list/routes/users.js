const express =require('express');
const router = express.Router();

const userController = require('../controllers/users_controllers');
router.get('./profile',userController.profile);
router.get('./sign-up',userController.signUp);
router.get('./sign-in',userController.signIn);

module.exports = router;