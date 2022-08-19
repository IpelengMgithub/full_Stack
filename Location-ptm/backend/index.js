const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

//database connection
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true,})
.then(()=>{
    console.log('Mongodb connected');
})
.catch((err)=> console.log(err));

//port number
app.listen(8080, ()=>{
    console.log('server running on port 8080');
});