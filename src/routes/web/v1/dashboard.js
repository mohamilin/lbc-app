const { Router } = require('express');
const { dashboard } = require('../../../controllers/web/dashboard');

const auth = require('../../../helpers/auth');

const router = Router();

router.use(auth);

router.get('/', dashboard);
module.exports = router;
