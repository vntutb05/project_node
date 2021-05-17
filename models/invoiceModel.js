const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cardSchema = new Schema({
    infoProduct:{
        type : Array,
        require:true
    },
    infoCustomer:{
        name:{
            type : String,
            require : true
        },
        phone:{
            type : Number,
            require : true
        }, 
        email:{
            type : String,
        },
        address :{
            type : String,
            require : true
        },
        note :{
            type: String
        }
    },
    createdAt :{
        type : Date,
        default : Date.now()
    }
})
let cardModel = mongoose.model('cards',cardSchema);
module.exports = cardModel