// Importing required libraries
const express = require('express');
const path = require('path');
const mysql = require('mysql');

//const mongoose = require('mongoose');
const mainRoute = require('./routes/main');

// Making the main express app
const app = express();

// Connecting to mongoose
//mongoose.connect('mongodb://127.0.0.1:27017/irisWeb')
//    .then(() => {
//        console.log("DATABASE CONNECTED");
//    })
//    .catch(err => {
//        console.log("COULD NOT CONNECT DATABASE");
//        console.log(err);
//    })
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sunil', // Modify to mYSQL paswiord
    database: 'iris' // Create a database called iris in ur mysql
})

connection.connect((err) => {
    if (err) {
        console.log("COULD NOT CONNECT TO DATABASE");
        console.log(err);
    } else {
        console.log("CONNECTED TO DATABASE");

        
        // Student Table  
        const Student = `CREATE TABLE Student (
            Reg_no int,
            Password varchar(50),
            Name varchar(50),
            Email varchar(50),
            CGPA float,
            Credits_Obtained int,
            Fee_Paid boolean,
            Semester int,
            Department_id int,
            PRIMARY KEY (Reg_no)
            FOREIGN KEY (Department_id) REFERENCES Department(Department_id)
        )`;
        
        connection.query(Student, (err, result) => {
            if (err) {
                console.log("COULD NOT CREATE TABLE");
    
            } else {
    
                console.log("TABLE CREATED");
    
            }
        })
        // Department Table
        const Department = `CREATE TABLE Department(
            Department_id int,
            Department_name varchar(50),
            PRIMARY KEY (Department_id)
        )`;
    
        connection.query(Department, (err, result) => {
            if (err) {
                console.log("COULD NOT CREATE TABLE");
    
            } else {
    
                console.log("TABLE CREATED");
    
            }
        })

        // Company Table
        const Companies = `CREATE TABLE Companies (
            Company_id int,
            Dept_id int,
            Salary_offered float,
            Company_name varchar(30),
            PRIMARY KEY (Company_id)
        )`;

        connection.query(Companies, (err, result) => {
            if (err) {
	            console.log("COULD NOT CREATE TABLE");

            } else {

                console.log("TABLE CREATED");

            }
        })


        // Alumni_Message Table
        const Alumni_Message = `CREATE TABLE Alumni_Message (
            Reg_no int, 
            Message varchar(200)
        )`;

            connection.query(Alumni_Message, (err, result) => {
                if (err) {
                    console.log("COULD NOT CREATE TABLE");

                } else {

                    console.log("TABLE CREATED");

                }
            })



        // Alumni Table
            const Alumni = `CREATE TABLE Alumni (
                Reg_no int, 
                Dept int, 
                Company_id int,
                PRIMARY KEY (Alumni Reg_no)
            )`;

            connection.query(Alumni, (err, result) => {
                if (err) {
                    console.log("COULD NOT CREATE TABLE");

                } else {

                    console.log("TABLE CREATED");

                }
            })


        // Professor Table
            const Professor = `CREATE TABLE Professor (
                Professor_id int, 
                Department_id int, 
                Name varchar(50),
                Course_id int, 
                PRIMARY KEY (Professor_id)
            )`;

            connection.query(Professor, (err, result) => {
                if (err) {
                    console.log("COULD NOT CREATE TABLE");

                } else {

                    console.log("TABLE CREATED");

                }
            })


        // Results Table
            const Results = `CREATE TABLE Results (
                Course_id int, 
                Student_Reg_no int,
                Score_obtained float,
            )`;

            connection.query(Results, (err, result) => {
                if (err) {
                    console.log("COULD NOT CREATE TABLE");

                } else {

                    console.log("TABLE CREATED");

                }
            })


        // Course_info Table
            const Course_info = `CREATE TABLE Course_info (
                Course_id int, 
                Course_name varchar(50),
                Credits int,
                PRIMARY KEY (Course_id)
            )`;
        
            connection.query(Course_info, (err, result) => {
                if (err) {
                    console.log("COULD NOT CREATE TABLE");
        
                } else {
        
                    console.log("TABLE CREATED");
        
                }
            })


        // Fee_transaction Table
            const Fee_transaction = `CREATE TABLE Fee_transaction (
                Reg_no int, 
                Amount_paid int, 
                Semester int
            )`;
        
            connection.query(Fee_transaction, (err, result) => {
                if (err) {
                    console.log("COULD NOT CREATE TABLE");
        
                } else {
        
                    console.log("TABLE CREATED");
        
                }
            })



        }

})
    

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
