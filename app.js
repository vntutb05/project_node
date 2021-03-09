const express = require('express');
const bodyParser = require('body-parser');

const server = require('./config/server');
const connectDB = require('./config/database');
const userRouter = require('./routes/admin/userRouter');
const router = express.Router();

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/assets', express.static(__dirname + '/public'));

router.use('/admin/user',userRouter);

app.set("view engine", "ejs");
connectDB();
server(app);