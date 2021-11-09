const { Router } = require('express');
const { viewTransaction } = require('../../../controllers/web/transactions');

const router = Router();

router.get('/class/:id', viewTransaction);

module.exports = router;
