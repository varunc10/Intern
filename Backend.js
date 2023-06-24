const express = require('express');
const mongoose = require('mongoose');
const User = require('./schema');
const app = express();
const cors = require('cors');

app.use(express.json());

require('dotenv').config();

const uri = process.env.MONGODB_URI;

// Enable CORS for all routes
app.use(cors());
mongoose.connect(uri)
    .then(() => {
        console.log("Mongo Connection Open");
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })

app.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/users/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// Assuming you have already defined the User model and connected to MongoDB

// API endpoint to update a user
app.put('/users/:id', async (req, res) => {
    console.log(req.body);
    const { id } = req.params;
    const { name, email, gender, status } = req.body;

    try {
        // Find the user by ID
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update the user data
        user.name = name;
        user.email = email;
        user.gender = gender;
        user.status = status;

        // Save the updated user to the database
        await user.save();

        // res.json({ message: 'User updated successfully' });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    res.redirect('/');
});


// ...

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Server is running');
});



// ...

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});