const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true;
    },
    Email{
        type: String;
        required: true;
        unique: true;
    },
    passwrod:{
        type: String,
        required:true,
    },

    date{
        type:Date,
        default: Date.now;
    }
});

module.exports = User = mongoose.model('user',userSchema);