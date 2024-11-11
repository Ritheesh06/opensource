const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: [/^[\w-\.]+@vnrvjiet\.in$/, 'Please use a @vnrvjiet.in email']
    },
    pursuingYear: { type: Number, required: true },
    branch: { type: String, required: true },
    rollNumber: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['organizer', 'participant'], required: true }
});

module.exports = mongoose.model('User', userSchema);
