const { Router } = require('express');
const { createTopic, viewTopicbyId } = require('../../../controllers/web/topics');

const router = Router();

router.post('/', createTopic);
router.get('/:id', viewTopicbyId);
module.exports = router;
