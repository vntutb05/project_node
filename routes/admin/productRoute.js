const express = require('express');
const router = express.Router();
const productController = require('../../controllers/admin/productController');
const validator = require('../../auth/productAuth');
router.route('/').get(productController.index);
router.route('/add').get(productController.getAdd).post(validator.addValidator(),productController.postAdd);
router.route('/edit/:id').get(productController.getEdit).post(validator.editValidator(),productController.postEdit);
router.route('/delete/:id').get(productController.delete);

module.exports = router;