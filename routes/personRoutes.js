const express = require('express'); 
const router = express.Router();
const person= require('./../models/person');// define nhi dekha rha toh server se ehdar le aaye and  ya model 2 file piche hai toh es type se likhe hai 
// Define routes for /person
router.post('/', async (req,res)=>{ // abhi sab se person hata kr common send kar dange server pr
    try {
     const data =req.body // assuming the request boby contains the person data
    
     //create a new perosn document using the mongoose model
     const newPerson= new person(data);
     //save the new perosn to the database
const response = await newPerson.save();
console.log('data saved');
res.status(200).json(response);
}
catch(err){
  console.log(err);
  res.status(500).json({error:'internal server error'});
}
})
//get method to get the perosn
router.get('/', async(req, res)=>{
    try{
   const data= await person.find();
   console.log('data fetched');
   res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }
  })
  router.get('/:worktype', async (req,res)=>{
    try{
    const worktype = req.params.worktype;// extract the work type form the url parameter
     if(worktype=='chef'|| worktype=='manager'|| worktype=='waiter'){
      const response= await person.find({work: worktype});
      console.log('response fetched');
      res.status(200).json(response);
    }
    else{
      res.status(404).json({error:'invalid work type'})
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
  }
  })
  router.put('/:id', async (req, res) => {
    try {
    const personId = req.params.id; // Extract the person's ID from the URL parameter 
    const updatedPersonData = req.body; // Updated data for the person
    const response = await person.findByIdAndUpdate(personId, updatedPersonData ,{
      new : true, // return the updated documents
      runValidators: true, // run mongoose validation 
    })
    if (!response) { 
      return res.status(404).json({ error: 'Person not found'});
    }
    
    console.log('data updated');
    res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }
    })
    router.delete('/:id', async (req, res)=>{
      try{
        const personId = req.params.id; // extract the person's ID formthe url parameter
        //assuming you have a person model
        const response = await person.findByIdAndDelete(personId);
        if (!response) { 
          return res.status(404).json({ error: 'Person not found'});
        }
        console.log('data deleted');
        res.status(200).json({message:'person deleted sucessfully'});
      }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
      }
    })
  module.exports= router;