const { Router } = require('express');
const { viewClassStudent, viewDetailClassStudent } = require('../../../controllers/web/students');
const auth = require('../../../helpers/auth');
const isSuccess = require('../../../helpers/transaction');

const router = Router();

router.use(auth);

router.get('/kelas_saya', viewClassStudent);
router.get('/detail_kelas/:id', viewDetailClassStudent);

module.exports = router;
