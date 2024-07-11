// function add(a,b){
//     return a +b;
// }
// var add = (a,b)=>{return a+b;}
// var add = (a,b) => a+b;
// var result = add(22,5);
// console.log(result);
// (function(){
//     console.log('ajay is added');
// })();
// function callback(){
//     console.log('adding is done');
// }
// const add = function(a , b, callback){
//     var result= a+b;
//      console.log('result:'+ result);// main function work done
//     callback();
// }
// // add(2,45, callback);

// // add(3,2, function(){
// //     console.log('word done');
// // });
//  add(2,3,()=> console.log('word done'));
// var fs= require('fs');
// var os = require('os');
  
// var user= os.userInfo();
// console.log(user);
// console.log(user.username);
// fs.appendFile('greeting.text','hi'+ user.username + '!\n', ()=>{
//     console.log('file is created');
// });
// console.log(os);
// console.log(fs);
// const notes = require('./notes.js');
// var _=require('lodash');
// console.log('server file is available');
//  var age= notes.age;
  
//  var result= notes.addnumber(age+18 , 10);
//  console.log(age);
//  console.log('result is now '+result);
//  var data=["person", "person",1,2,1,2,'name','name','age',2];
//  var filter = _.uniq(data);
//  console.log(filter);
// console.log(_.isString(false));
// console.log(_.isString(true));
// console.log(_.isString(3));
// console.log(_.isString('ajay'));
// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
//  const jsonObject = JSON.parse(jsonString); // Convert JSON string to object 
//  console.log(jsonObject.name); // Output: John

//  const objectToConvert = {
//      name: "Alice",
//       age: 25 
//     };
// const json = JSON.stringify(objectToConvert); // Convert object JSON string
// console.log(json); // Output: {"name": "Alice", "age":25}
// console.log( typeof json);

const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

// const person= require('./models/person');
// const MenuItem = require('./models/MenuItem');

const bodyParser = require('body-parser');
 app.use(bodyParser.json());// json data lega usko object me parse/convert karega and store kr lega req.boby me

 const PORT = process.env.PORT || 3000;
 
app.get('/', function (req, res) {
  res.send('Hello Welcome to my hotel... How can i Help you? , we have a list of menus')
})
// app.get('/chicken', function (req, res) {
//     res.send('chicken yaaa looooo')
//   })
//   app.get('/idli', (req, res)=> {
//     var customized_idli={
//      name: 'rava idli',
//      size:'10 cm diameter',
//      is_sambhar: true,
//      is_chutney: false
//     }
//     res.send(customized_idli)
//     //res.send('idli yaaa looooo')
//   })
//   app.post('/items', (req,res)=>{
//     res.send('data is saved');
//   })

//  newperson.name= data.name;
//  newperson.age= data.age;
//  newperson.mobile= data.mobile;
//  newperson.email= data.email;
//  newperson.address= data.address; to avoid doing this all time we pass data above

// nowadays no one uses callback funtion in post method, it look complex and not good readability.
// newperson.save((error , savedperson)=>{
//  if(error){
//   comsole.log('error saving perosn:',error);
//   res.status(500).json({ error:'internal server error'})
//  }else{
//   console.log('data saved sucessfully');
//   res.status(200).json(savedperson);
//  }
// })

//import the router files 
const personRoutes = require('./routes/personRoutes');
const menuitemRoutes = require('./routes/menuitemroutes');
//use the router
app.use('/person',personRoutes);
app.use('/MenuItem', menuitemRoutes);



app.listen(PORT, ()=>{
  console.log('listening on port 3000')
})
// ctrl + c server dead , and again karne ko nodemon server.js
