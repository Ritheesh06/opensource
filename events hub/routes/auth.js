const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const router = express.Router();

// Registration Route
router.post('/register', async (req, res) => {
    const { fullName, username, email, pursuingYear, branch, rollNumber, password, role } = req.body;

    try {
        // Check if email is valid
        if (!email.endsWith('@vnrvjiet.in')) {
            return res.status(400).json({ message: 'Invalid email domain' });
        }

        // Check if username is unique
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Password validation (must contain at least one special character)
        if (!/[!@#$%^&*]/.test(password)) {
            return res.status(400).json({ message: 'Password must include special characters' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            fullName,
            username,
            email,
            pursuingYear,
            branch,
            rollNumber,
            password: hashedPassword,
            role
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Compare the password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        res.status(200).json({ message: `Welcome ${user.role}!` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
