const { Router } = require('express');
const { viewMentor } = require('../../../controllers/web/mentor');

const router = Router();

router.get('/mentor', viewMentor);

module.exports = router;
