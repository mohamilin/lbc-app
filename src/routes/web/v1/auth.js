const express = require('express');
const { register, login } = require('../../../controllers/web/auth');
const { viewHomepage } = require('../../../controllers/web/homepage');

const router = express.Router();
router.get('/', viewHomepage);
router.get('/register', register);
router.get('/login', login);
module.exports = router;
