const express = require('express');
const router = express.Router();
const userController = require('../../controllers/admin/userController');
const validator = require('../../auth/userAuth');

router.route('/').get(userController.index);
router.route('/add').get(userController.getAdd).post(validator.addValidator(),userController.postAdd);
router.route("/edit/:id").get(userController.getEdit).post(validator.editValidator(),userController.postEdit);
router.route("/delete/:id").get(userController.delete);

module.exports = router;