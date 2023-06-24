const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Id: Number,
    name: String,
    email: String,
    gender: String,
    status: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;