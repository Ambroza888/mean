const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/belt_exam', {useNewUrlParser: true});

const SkillSchema = new mongoose.Schema({
  skill: {type:String},
},{timestamps:true})

const PetSchema = new mongoose.Schema({
  name:{type:String,required:[true, "You need atleast 3 characters for NAME"],minlength:[3, "You need atleast 3 characters for NAME"],unique:true},
  type: {type:String, required:[true, "You need atleast 3 characters for NAME"],minlength:[3, "You need atleast 3 characters for TYPE"],unique:true},
  description: {type:String,required:[true, "You need atleast 3 characters for NAME"],minlength:[3,"You need atleast 3 character for DESCRIPTIONS"],unique:true},
  likes:{type:Number,default:0},
  skills:[SkillSchema]
},{timestamps:true})
const Pet = mongoose.model('Pet',PetSchema);
module.exports = Pet;