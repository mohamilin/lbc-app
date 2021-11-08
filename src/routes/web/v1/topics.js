const { Router } = require('express');
const { createTopic } = require('../../../controllers/web/topics');

const router = Router();

router.post('/', createTopic);
module.exports = router;
