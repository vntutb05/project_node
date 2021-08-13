const mongoose = require('mongoose');
const {database} = require('./config');
let connectDb=function(){
    mongoose.connect(database.uri,{ useNewUrlParser: true,useUnifiedTopology: true  },(err)=>{
        if(err){
            return console.log(err);
        }
        console.log("success")
    } )
}

module.exports = connectDb;