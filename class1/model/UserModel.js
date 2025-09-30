const mongoose = require("mongoose");
const studentschema = new mongoose.Schema({
Name:{type:String},
Email:{type:String},
Age:{type:Number}

})
module.exports = mongoose.model("student",studentschema)