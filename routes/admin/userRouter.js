const express = require('express');
const router = express.Router();
const userController = require('../../controllers/admin/userController');

router.route('/').get(userController.index);
router.route('/add').get(userController.getAdd).post(userController.postAdd);
router.route("/edit/:id").get(userController.getEdit).post(userController.postEdit);
router.route("/delete/:id").get(userController.delete);

module.exports = router;