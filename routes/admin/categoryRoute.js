const express = require('express');
const categoryController = require('../../controllers/admin/categoryController');
const router = express.Router();

router.route('/').get(categoryController.index);
router.route('/add').get(categoryController.getAdd).post(categoryController.postAdd);
router.route('/edit/:id').get(categoryController.getEdit).post(categoryController.postEdit);
router.route('/delete/:id').get(categoryController.delete);

module.exports = router;