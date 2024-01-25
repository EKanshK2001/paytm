const express = require('express');
const userRoute = express.Router();                     // we export this user route
const { z } = require('zod');                           // zod for input validation
const jwt = require('jsonwebtoken');                    // json web token
const JWT_SECRET = require('../config');                // json secret from config.js


//zod schema for signup
const zodUserSchema = z.object({
    username: z.string().email(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string()
});



userRoute.post('/signup', async(req, res) => {

});

userRoute.get('/signup', async(req, res) => {

});

userRoute.get('/bulk', async(req, res) => {

});

userRoute.put('/update', async(req, res) => {

});





module.exports = userRoute;