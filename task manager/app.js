const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const port = 3000;
require('dotenv').config();

//middleware
app.use(express.json());
app.use(express.static('./public'));



app.use('/api/v1/tasks',tasks);

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_UTI);
        app.listen(port,console.log(`port is listening at ${port}...`));
    } catch (error) {
        console.log(error); 
    }
} 

start()


