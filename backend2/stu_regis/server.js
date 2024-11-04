// server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Function to validate email
function isValidEmail(email) {
    return email.endsWith('@vnrvjiet.in');
}

// Endpoint to handle student registration
app.post('/register', (req, res) => {
    const { name, rollNumber, branch, section, email } = req.body;

    // Check if all fields are provided
    if (!name || !rollNumber || !branch || !section || !email) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate email domain
    if (!isValidEmail(email)) {
        return res.status(400).json({ message: 'Invalid email. Must be @vnrvjiet.in' });
    }

    // Data to save in CSV format
    const studentData = `${name},${rollNumber},${branch},${section},${email}\n`;
    const filePath = path.join(__dirname, 'students.csv');

    // Append student data to the CSV file
    fs.appendFile(filePath, studentData, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            return res.status(500).json({ message: 'Server error' });
        }
        res.json({ message: 'Student registered successfully' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
