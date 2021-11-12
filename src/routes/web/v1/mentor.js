const { Router } = require('express');
const { viewMentor } = require('../../../controllers/web/mentor');
const auth = require('../../../helpers/auth');

const router = Router();

router.use(auth);

router.get('/mentor', viewMentor);

module.exports = router;
