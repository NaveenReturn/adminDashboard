const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    email:String,
    role:{
        type:String,
        default:"user"
    } 
});
const model = mongoose.model("authers",Schema);
module.exports =model;
