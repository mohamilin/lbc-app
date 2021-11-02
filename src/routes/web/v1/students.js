const { Router } = require('express');
const { viewClass, viewDetailClass } = require('../../../controllers/web/students');

const router = Router();

router.get('/kelas_saya', viewClass);
router.get('/detail_kelas/1', viewDetailClass);

module.exports = router;
