const express = require('express');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const redis = require('redis');
const morgan = require('morgan')
const server = require('./config/server');
const connectDB = require('./config/database');
const router = require('./routes/admin/router');
const webRoute = require('./routes/web/index');
const {globalVariable}=require('./config/config');

let redisClient = redis.createClient(12998, 'redis-12998.c10.us-east-1-2.ec2.cloud.redislabs.com',{password:"P7gxdQtx6TFXRXGZwuEDmyfN4siGCzze"});
let RedisStore = require('connect-redis')(session)
let app = express();
connectDB();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(flash());
app.use(session({
    resave: true, 
    saveUninitialized: true, 
    secret: 'somesecret', 
    cookie: { maxAge: 7*24*60*60*60*1000 }})
);
app.use(morgan('tiny'));
// app.use(
//     session({
//       store: new RedisStore({ client: redisClient }),
//       secret: 'keyboard cat',
//       resave: false,
//     }
//   ))

app.use(globalVariable);
app.use('/assets', express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.use(router);
app.use(webRoute);
server(app); 