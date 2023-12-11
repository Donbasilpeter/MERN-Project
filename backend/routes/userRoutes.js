const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.home);
router.get('/list', userController.getAllUsers);
router.get('/add', userController.getAddUserForm);
router.post('/add', userController.addUser);
router.get('/update/:id', userController.getUpdateUserForm);
router.post('/update/:id', userController.updateUser);
router.get('/delete/:id', userController.deleteUser);

module.exports = router;
