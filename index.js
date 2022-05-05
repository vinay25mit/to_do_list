//install ejs
//app.set()-view engine /view path
//set up view directory and file
//render using res.render()

const express=require("express");
const path=require('path');
const db=require('./config/mongoose');
const Contact=require("./models/to_do");
const port=8000;
const app=express();
app.use(express.static('assets'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get("/practise",function(req,res){
      Contact.find({},function(err,contacts){
            if(err) {
                  console.log("error in creating contact ");
                  return;
            }
            return res.render('home',{
                  title:'contact List',
                  contact_list:contacts
            });

      });

});








// app.get('/,function(req,res)(
// {   
//       Contact.find({},function(err,contacts){
//             if(err){
//                   console.log("error from fetching data from db");
//                   return;
//             }
//                   return res.render("home",{
//                   title:"my contact list",
//                   contact_list:contacts
//             });
//       })

// })
app.get('/',function(req,res){
      return res.render('practise',
      {
          title:'lets us play',
          contact_list:contactList

      })
});
// app.post("/create-contact",function(req,res)
//  {    Contact.create({
//        name:req.body.name,
//        phone:req.body.phone
//  },
//  function(err,newContact){
//        if(err) {console.log('error in creating contact');
//        return;
//       }
//        console.log("****",newContact);
//        return res.redirect("back");

//       });


//       return res.redirect('back');
// });
app.post('/create-contact',function(req,res){
      Contact.create({
            categoary:req.body.categoary,
            name:req.body.name,
            due_date:req.body.due_date
      },
      function(err,newContact){
            if(err) {console.log("error in creating a contact");
            return;
      }
      console.log("****",newContact);
       return res.redirect('back');

      });
});
app.get('/delete-contact/',function(req,res)
{
      let id=req.query.id;
      Contact.findByIdAndDelete(id,function(err){
            if(err) {console.log("error in deleting");
            return;
      }
      return res.redirect('back');
      })

    
})
app.listen(port, function(err)
{
      if(err)console.log('error in running the server',err);
      console.log('yup my express server is running on port 8000',port);
})