const mongose = require('mongoose');
const Schema = mongose.Schema;

let categorySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },creationDate:{
        type:Date,
        default: Date.now()
    }
})
let categoryModel = mongose.model('category',categorySchema);
module.exports = categoryModel;