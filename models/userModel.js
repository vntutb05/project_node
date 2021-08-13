const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Number,
        required:true
    },isDeleted:{
        type:Boolean,
        required:true
    },creationDate:{
        type:Date,
        default: Date.now()
    }
})
let userModel = mongoose.model('user',userSchema);
// userModel.create(
//     {
//         "email" : "admin1@gmail.com",
//         "name" : "Vu Tu122",
//         "address" : "TPHCM",
//         "phone" : 123456789,
//         "password" : "$2b$10$hN/3CRXPoo6FryrVfdTFLeBVMZRv/jmTit5WSlHQKUxoWjNF316CG",
//         "isAdmin" : 0,
//         "isDeleted" : false,
//     }
// )
module.exports = userModel;