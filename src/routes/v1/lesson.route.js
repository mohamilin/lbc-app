const { Router } = require('express');
const { actionCreateLesson } = require('../../controllers/web/lessons');

const router = Router();

router.post('/action/create', actionCreateLesson);

module.exports = router;
