const express = require('express');
const router = express.Router();

const user = require('../project/controllers/userController');
const options = require('../project/controllers/optionsController');
const home = require('../project/controllers/homeController')

router.post('/user', user.create);
router.get('/user', user.details);
router.post('/options', options.create);
router.get('/options', options.details);
router.get('/home', home.details);

module.exports = router;