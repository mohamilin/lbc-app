const express = require('express');
const { register, login } = require('../../../controllers/web/auth');

const router = express.Router();
router.get('/', register);

router.get('/login', login);
module.exports = router;
