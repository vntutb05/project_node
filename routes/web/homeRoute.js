const express = require('express');
const Route = express.Router();
const {homeController} = require('../../controllers/web/index');
Route.route('/').get(homeController.home);
Route.route('/about').get(homeController.about);
Route.route('/contact').get(homeController.contact);
Route.route('/blog').get(homeController.blog);

module.exports = Route;