const mysql = require('mysql2')


const createTables = () =>{
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'sunil', // Modify to mYSQL paswiord
        database: 'dbmsproj' // Create a database called iris in ur mysql
    })
    
    connection.connect((err) => {
        if (err) {
            console.log("COULD NOT CONNECT TO DATABASE");
            console.log(err);
        } else {
            console.log("CONNECTED TO DATABASE");
    
            // Creating the table
            const Student = `CREATE TABLE IF NOT EXISTS Student (
                Reg_no int,
                Password varchar(50),
                Name varchar(50),
                Email varchar(50),
                CGPA decimal(3,1),
                Credits_Obtained int,
                Fee_Paid boolean,
                Semester int,
                Department_id int,
                PRIMARY KEY (Reg_no)
            )`;
            
            connection.query(Student, (err, result) => {
                if (err) {
                    console.log("COULD NOT CREATE TABLE");
                } else {
                    console.log("STUDENT TABLE CREATED");
                }
            })
    
            const Department = `CREATE TABLE IF NOT EXISTS Department(
                Department_id int,
                Department_name varchar(50),
                PRIMARY KEY (Department_id)
            )`;
        
            connection.query(Department, (err, result) => {
                if (err) {
                    console.log("COULD NOT CREATE TABLE");
                } else {
                    console.log("DEPARTMENT TABLE CREATED");
                }
            })
    
            const Companies = `CREATE TABLE IF NOT EXISTS Companies (
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
                    console.log("COMPANIES TABLE CREATED");
                }
            })
    
            const Alumni_Message = `CREATE TABLE IF NOT EXISTS Alumni_Message (
                Reg_no int, 
                Message varchar(200)
            )`;
    
            connection.query(Alumni_Message, (err, result) => {
                if (err) {
                    console.log("COULD NOT CREATE TABLE");
    
                } else {
    
                    console.log("ALUMNI MESSAGE TABLE CREATED");
    
                }
            })
    
            const Alumni = `CREATE TABLE IF NOT EXISTS Alumni (
                Reg_no int, 
                Dept int, 
                Company_id int,
                PRIMARY KEY (Reg_no)
            )`;
    
            connection.query(Alumni, (err, result) => {
                if (err) {
                    console.log("COULD NOT CREATE TABLE");
                } else {
                    console.log("ALUMNI TABLE CREATED");
                }
            })
    
            const Professor = `CREATE TABLE IF NOT EXISTS Professor (
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
                    console.log("PROFESSOR TABLE CREATED");
                }
            })
    
            const Results = `CREATE TABLE IF NOT EXISTS Results (
                Course_id int, 
                Student_Reg_no int,
                Score_obtained decimal(3,1)
            )`;
    
            connection.query(Results, (err, result) => {
                if (err) {
                    console.log("COULD NOT CREATE TABLE");
                } else {
                    console.log("RESULTS TABLE CREATED");
                }
            })
    
            const Course_info = `CREATE TABLE IF NOT EXISTS Course_info (
                Course_id int, 
                Course_name varchar(50),
                Credits int,
                PRIMARY KEY (Course_id)
            )`;
        
            connection.query(Course_info, (err, result) => {
                if (err) {
                    console.log("COULD NOT CREATE TABLE");
                } else {
                    console.log("COURSE INFO TABLE CREATED");
                }
            })
    
            const Fee_transaction = `CREATE TABLE IF NOT EXISTS Fee_transaction (
                Reg_no int, 
                Amount_paid int, 
                Semester int
            )`;
        
            connection.query(Fee_transaction, (err, result) => {
                if (err) {
                    console.log("COULD NOT CREATE TABLE");
                } else {
                    console.log("FEE TRANSACTION TABLE CREATED");
                }
            })
            }
    
    })

}

module.exports = createTables;