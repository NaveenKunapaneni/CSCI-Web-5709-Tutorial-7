const express = require('express')
const app = express();
const PORT = process.env.PORT || 3030;
const route = require('./routes/route');
const connectDb = require('./Db/connect.js');
const cors = require('cors');
require('dotenv').config()


//middleware
app.use(express.json())
app.use(cors());



//routes
app.use('/api/v1/', route);


const start = async () => {
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(PORT, console.log(`Server is running on ${PORT}...`))
    }
    catch (error) {
        console.log(error);
    }
}

start()