const { Router } = require('express');
const { actionCreateChapter } = require('../../controllers/web/chapters');

const router = Router();
router.post('/action/create', actionCreateChapter);
module.exports = router;
