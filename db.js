const mongoose = require('mongoose');
require('dotenv').config();
//DEFINE THE MONGODB CONNECTION URL
//const mongoURL ='mongodb://localhost:27017/hotels'// REPLACE MYDATABASE WITH YOUR DATABASE NAME
//const mongoURL ='mongodb+srv://ajayr4610:L8wCe9LVaiVwTr2a@ajayraj.n7gpg1a.mongodb.net/'
//const mongoURL= process.env.MONGODB_URL;
const mongoURL = process.env.MONGODB_URL;


// set up mongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true// used this parameter to avoid warning during database connection
})
// mongoose ek default connection object maintion karta , wo obj responsible hai interaction karne ko
// get a default connection
//mongoose maintains a default connections object representating the mongoDB connection.
const db = mongoose.connection;

db.on('connected', () =>{
    console.log('connected to mongoDB server');
});
db.on('error', (err)=>{
    console.error(' mongoDB connection error:', err);
});
db.on('disconnected', ()=>{
    console.log('disconnected to mongoDB server');
});
// export the database connection
module.exports= db;