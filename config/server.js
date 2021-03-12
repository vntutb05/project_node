const {PORT,HOST} = require('./config'); 
let server = function (app) {
    app.listen(PORT,'127.0.0.1',()=>{
        console.log(`Connect to server success at port ` +PORT);
        console.log("Access to '127.0.0.1:3000'")
    })
}
module.exports = server;