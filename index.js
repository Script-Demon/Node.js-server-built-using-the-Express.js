const express = require('express');   // Import the Express framework for building the server
const fs = require("fs");             // Import the 'fs' (File System) module to interact with the file system
const path = require("path");         // Import 'path' to handle file paths in a platform-independent way
const app = express();                // Initialize an Express application
const port = 5000;                    // Set the port number for the server to listen on

// Middleware to parse incoming JSON requests
app.use(express.json());  // Allows the server to handle JSON data in incoming requests

// Handle GET request to the root URL ('/')
app.get('/', (req, res) => {
    console.log("amra data paisi");   // Log a message to the console when this route is accessed
    res.send("welcome to my server"); // Send a welcome message as a response to the client
});

// Handle GET request to '/api/data' endpoint
app.get("/api/data", (req, res) => {
    const filepath = path.join(__dirname, "data", "sampleData.json"); // Define the file path to the JSON data file

    // Read the content of the JSON file asynchronously
    fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {  // If an error occurs during file reading
            return res.send("failed to read database");  // Send an error message back to the client
        }

        const jsonData = JSON.parse(data);  // Parse the file content from JSON string into a JavaScript object
        res.send(jsonData);  // Send the parsed JSON data as the response to the client
    });
});

// Handle POST request to '/api/data' endpoint
app.post("/api/data", (req, res) => {
    const userData = req.body;  // Access the data sent in the request body (JSON data)
    console.log(userData);      // Log the received data to the console for debugging purposes
    res.send("We Got The Data"); // Send a confirmation message to the client that the data was received
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`server running ${port}`);  // Log a message when the server starts successfully
});
