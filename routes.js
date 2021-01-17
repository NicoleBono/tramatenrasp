const express = require('express');
const router = express.Router();

const user = require('../project/controllers/userController');
const options = require('../project/controllers/optionsController');

router.post('/user', user.create);
router.get('/user', user.details);
router.post('/options', options.create);
router.get('/options', options.details);

module.exports = router;