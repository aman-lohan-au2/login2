const express = require('express');
const router = express.Router();
const StudentController = require('../controller/controller');


router.route('/signup').post(StudentController.add)
router.route('/login').post(StudentController.checkUser)


module.exports = router;