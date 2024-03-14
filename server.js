// Importing required libraries
const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const createTables = require('./createTables');
const insertValues = require('./insertValues');

const mainRoute = require('./routes/main');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sunil', // Modify to mYSQL paswiord
    database: 'dbmsproj' // Create a database called iris in ur mysql
})

// Making the main express app
const app = express();
//createTables();
//insertValues();
    

// Setting app settings
app.set('view engine', 'ejs');
// Passing body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Setting up static folders
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// Using the routes
app.use('/', mainRoute);

// Running the Website
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})
