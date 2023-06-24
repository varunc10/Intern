const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./schema');
const app = express();
const PORT = 5000;
const axios = require('axios')

require('dotenv').config();

const uri = process.env.MONGODB_URI;

mongoose.connect(uri)
    .then(() => {
        console.log("Mongo Connection Open");
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })


axios.get('https://gorest.co.in/public-api/users')
    .then(response => {
        const users = response.data.data;
        console.log(users);
        users.forEach(user => {
            const newUser = new User({
                Id: user.Id,
                name: user.name,
                email: user.email,
                gender: user.gender,
                status: user.status,
            });
            newUser.save()
                .then(() => {
                    console.log('User saved to the database');
                })
                .catch(error => {
                    console.error('Error saving user:', error);
                });
        });
    })
    .catch(error => {
        console.error(error);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
