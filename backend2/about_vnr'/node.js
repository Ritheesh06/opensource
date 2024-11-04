// server.js
const express = require('express');
const cors = require('cors');  // Import CORS middleware
const app = express();
const PORT = 3000;

// Use CORS middleware to allow requests from different origins
app.use(cors());

// Define the /about_vnr route to serve JSON data
app.get('/about_vnr', (req, res) => {
  res.json({
    title: "About Vnr",
    content: `The Philosophy of Vignana Jyothi unravels education as a process of "Presencing" that provides, both individually and collectively, to one's deepest capacity to sense and experience the knowledge and activities to shape the future. Based on a synthesis of direct experience, leading edge thinking and ancient wisdom, it taps into 'deeper levels of LEARNING for discovering new possibilities'.

    Today, with this philosophy, Vignana Jyothi has created an edifice that is strong in its foundations, which can only rise higher and higher. Quality and integrity is the essence for achieving excellence at Vignana Jyothi Institutions. This and quest for excellence reflects in the vision and mission. Their passion reflects in the enterprise of education.`
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
