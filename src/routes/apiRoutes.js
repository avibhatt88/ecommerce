// routes/apiRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const departmentController = require('../controllers/departmentController');


router.get('/users', userController.getAllUsers);
router.post('/createDepartment', departmentController.createDepartment); 
router.get('/get-department-list', departmentController.getDepartmentList);

module.exports = router;
