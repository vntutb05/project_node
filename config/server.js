const {PORT,HOST} = require('./config'); 
let server = function (app) {
    app.listen(PORT,()=>{
        console.log(`Connect to server success at port ` +PORT);
        console.log("Access to '127.0.0.1:3000'")
    })
}
module.exports = server;