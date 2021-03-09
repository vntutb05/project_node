const express = require('express');
const router = express.Router();
const productController = require('../../controllers/admin/productController');
router.route('/').get(productController.index);
router.route('/add').get(productController.getAdd).post(productController.postAdd);
router.route('/edit/:id').get(productController.getEdit).post(productController.postEdit);
router.route('/delete/:id').get(productController.delete);

module.exports = router;