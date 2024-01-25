const express = require('express');
const router = express.Router();                    //requiring only the router of express for all the specific routes

const userRouter = require('./userRouter');         //the main router routes to the all specific routes and hence imports them

router.use('/user', userRouter);                    //pathing /api/v1/user to userRouter

module.exports = router;                            //exporting mainRouter for index.js to use