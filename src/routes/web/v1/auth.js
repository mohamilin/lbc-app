const express = require('express');
const { register, login, actionRegister, actionLogin } = require('../../../controllers/web/auth');
const { viewHomepage } = require('../../../controllers/web/homepage');

const router = express.Router();
router.get('/', viewHomepage);
router.get('/register', register);
router.post('/action/register', actionRegister);
router.get('/login', login);
router.post('/action/login', actionLogin);

module.exports = router;
