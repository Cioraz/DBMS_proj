const mysql = require('mysql2/promise')
const insertValues = require('./insertValues.js')

const createTables = async () =>{
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'sunil', // Modify to mYSQL paswiord
        database: 'dbmsproj' // Create a database called iris in ur mysql
    })
    
            // Creating the table
            await connection.execute(`CREATE TABLE IF NOT EXISTS Student (
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
            )`);
               
            await connection.execute(`CREATE TABLE IF NOT EXISTS Department(
                Department_id int,
                Department_name varchar(50),
                PRIMARY KEY (Department_id)
            )`);
        
               
            await connection.execute(`CREATE TABLE IF NOT EXISTS Companies (
                Company_id int,
                Dept_id int,
                Salary_offered float,
                Company_name varchar(30),
                
                PRIMARY KEY (Company_id)
            )`);
    
           
    
            await connection.execute(`CREATE TABLE IF NOT EXISTS Alumni_Message (
                Reg_no int, 
                Message varchar(200)
            )`);
    
           
    
            await connection.execute(`CREATE TABLE IF NOT EXISTS Alumni (
                Reg_no int, 
                Dept int, 
                Company_id int,
                Name varchar(200),
                PRIMARY KEY (Reg_no)
            )`);
    
           
    
            await connection.execute(`CREATE TABLE IF NOT EXISTS Professor (
                Professor_id int, 
                Department_id int, 
                Name varchar(50),
                Course_id int, 
                PRIMARY KEY (Professor_id)
            )`);
    
           
    
            await connection.execute(`CREATE TABLE IF NOT EXISTS Results (
                Course_id int, 
                Student_Reg_no int,
                Score_obtained decimal(3,1)
            )`);
    
    
            await connection.execute(`CREATE TABLE IF NOT EXISTS Course_info (
                Course_id int, 
                Course_name varchar(50),
                Credits int,
                PRIMARY KEY (Course_id)
            )`);
        
    
            await connection.execute( `CREATE TABLE IF NOT EXISTS Fee_transaction (
                Reg_no int, 
                Amount_paid int, 
                Semester int
            )`);

            await insertValues();
        
            }
    


module.exports = createTables;
