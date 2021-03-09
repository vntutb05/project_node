const express = require('express');
const userRoute = require('./userRouter');
const categoryRoute = require('./categoryRoute');
const productRoute = require('./productRoute');
const router = express.Router();

router.use("/admin/user",userRoute);
router.use("/admin/cate",categoryRoute);
router.use("/admin/product",productRoute);
module.exports = router;