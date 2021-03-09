const express = require('express');
const bodyParser = require('body-parser');

const server = require('./config/server');
const connectDB = require('./config/database');
const router = require('./routes/admin/router');

let app = express();
connectDB();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/assets', express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.use(router);
server(app); 