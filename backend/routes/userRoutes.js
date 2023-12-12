const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.home);
router.get('/list', userController.getAllUsers);
router.post('/add', userController.addUser);
router.post('/update', userController.updateUser);
router.post('/delete', userController.deleteUser);

module.exports = router;
