const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    tag:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    sale:{
        type:Number,
    },
    description:{
        type:String,
        required:true
    },
    image:{
        data:{
            type:Buffer,
            contentType:String
        },
        content:{
            type:String
        }
    },isDeleted:{
        type:Boolean,
        required:true
    }
    ,creationDate:{
        type:Date,
        default: Date.now()
    }
})
let productModel = mongoose.model('product',productSchema);
module.exports = productModel;