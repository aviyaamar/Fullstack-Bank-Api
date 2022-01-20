const mongoose = require('mongoose')

const users = mongoose.Schema({
    pasportID:{
        type: String, 
        require: true, 
        unique: true, 
      
    }, 
    name:{
        type: String,
        require: true
    }, 
    cash:{
        type:Number, 
        default:0
    }, 
    credit:{
        type:Number, 
        default:0
    }, 
    isActive:{
        type: Boolean, 
        require:true, 
        default: true
    }

})
const userModel = mongoose.model('users', users)
module.exports = userModel