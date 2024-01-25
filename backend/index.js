const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const mainRouter = require('./routes/mainRouter');  //require the main router from routes folder

app.use('/api/v1', mainRouter);                     //use the main router for all the routing for the domain path /api/v1 which is a common lingo

app.listen(3000, () => {                            //listen on a port
    console.log('server is up');
})


//notice no express.Router() in the server index.js cuz its 

