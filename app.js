const express = require('express');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');

const server = require('./config/server');
const connectDB = require('./config/database');
const router = require('./routes/admin/router');
const webRoute = require('./routes/web/index');
const {globalVariable}=require('./config/config');

let app = express();
connectDB();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(flash());
app.use(session({
    resave: true, 
    saveUninitialized: true, 
    secret: 'somesecret', 
    cookie: { maxAge: 60000 }})
);
app.use(globalVariable);
app.use('/assets', express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.use(router);
app.use(webRoute);
server(app); 