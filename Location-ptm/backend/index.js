const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const pinRoute = require('./routes/pins');
dotenv.config();
app.use(express.json());

//database connection
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true,})
.then(()=>{
    console.log('Mongodb connected');
})
.catch((err)=> console.log(err));

app.use('/api/pins', pinRoute);

//port number
app.listen(8080, ()=>{
    console.log('server running on port 8080');
});