const mongoose=require('mongoose');
const ContactSchema=new mongoose.Schema({
      name:{
            type:String,
            required: true
      },
      due_date:{
            type:String,
            required: true
      },
      categoary:{
            type:String,
            required:true
      }
});
const Contact=mongoose.model('Contact',ContactSchema);
module.exports = Contact;