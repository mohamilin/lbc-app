const { Router } = require('express');

const { createClass, viewClass, viewClassByTopic, viewClassById } = require('../../../controllers/web/classes');

const router = Router();

router.post('/', createClass);
router.get('/', viewClass);
router.get('/:id', viewClassById);
router.get('/topic/:id', viewClassByTopic);

module.exports = router;
