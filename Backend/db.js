const mongoose = require('mongoose');

//const monogoURL = "mongodb+srv://aj768982:aj768982 @cluster0.rhkdj.mongodb.net/"
const monogoURL = "mongodb://localhost:27017/website"


mongoose.connect(monogoURL,{
    useNewUrlParser:true,
    useUnifiedTopology: true
    
})

  const db = mongoose.connection;

   db.on('connected',()=>{
    console.log('mongodb connected successfully')
   })

   
   db.on('errpr',(err)=>{
    console.log('mongodb connection server error',err)
   })


   db.on('disconnected',()=>{
    console.log('mongodb disconnected successfully')
   })

   module.exports = db;