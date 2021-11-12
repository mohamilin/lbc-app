const { Router } = require('express');
const { viewTransaction } = require('../../../controllers/web/transactions');
const auth = require('../../../helpers/auth');

const router = Router();

router.use(auth);
router.get('/class/:id', viewTransaction);

module.exports = router;
