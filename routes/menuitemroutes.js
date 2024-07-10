const express = require('express'); 
const router = express.Router();
const MenuItem = require('./../models/MenuItem');
//post method to add a menu item
router.post('/', async(req, res)=>{
    try{
      const data = req.body
      const newMenu = new MenuItem(data);
      const response= await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }
  })
  // get method to get the menu item
  router.get('/' , async(req, res)=>{
     try{
      const data= await MenuItem.find();
      console.log('data fetched');
      res.status(200).json(data);
     }
     catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
     }
  })
  router.get('/:tastetype', async (req,res)=>{
    try{
    const tastetype = req.params.tastetype;// extract the work type form the url parameter
     if(tastetype=='Sweet'|| tastetype=='Sour'|| tastetype=='Spicy'){
      const response= await MenuItem.find({taste:tastetype});
      console.log('response fetched');
      res.status(200).json(response);
    }
    else{
      res.status(404).json({error:'invalid taste type'})
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
  }
  })
  //comment added for testing purpose 
  module.exports= router;