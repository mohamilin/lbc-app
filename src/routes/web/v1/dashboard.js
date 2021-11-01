const { Router } = require('express');
const { dashboard } = require('../../../controllers/web/dashboard');

const router = Router();

router.get('/', dashboard);
module.exports = router;
