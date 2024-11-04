// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Define a route for the root path that sends an HTML response
app.get('/', (req, res) => {
  // Send HTML with Hello World in an h1 tag
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
