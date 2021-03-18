const express = require('express');
const categoryController = require('../../controllers/admin/categoryController');
const router = express.Router();
const validator = require('../../auth/cateAuth');

router.route('/').get(categoryController.index);
router.route('/add').get(categoryController.getAdd).post(validator.addValidator(),categoryController.postAdd);
router.route('/edit/:id').get(categoryController.getEdit).post(validator.addValidator(),categoryController.postEdit);
router.route('/delete/:id').get(categoryController.delete);

module.exports = router;