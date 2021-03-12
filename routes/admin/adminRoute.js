const express = require('express');
const adminController = require('../../controllers/admin/adminController');
const router = express.Router();

router.route('/404').get(adminController.notFound);
router.route('/').get(adminController.index);

module.exports = router;