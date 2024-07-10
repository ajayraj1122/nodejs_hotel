const mongoose= require('mongoose');
// define the person schema
const personSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true // mtb person ho aapna name dena hi hoga 
    },
    age:{
        type: Number,
    },
    work:{
        type: String,
        enum:['chef', 'waiter', 'manager'],
        required: true
    },
    mobile:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    address:{
        type: String,
    },
    salary:{
        type:Number,
        required: true
    }
});
// now let create person model with use of above schema
const person= mongoose.model('person',personSchema);
module.exports = person;