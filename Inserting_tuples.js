// Importing required libraries
const express = require('express');
const path = require('path');
const mysql = require('mysql2');

const mainRoute = require('./routes/main');

// Making the main express app
const app = express();

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sunil', // Modify to mYSQL paswiord
    database: 'dbmsproj' // Create a database called iris in ur mysql
})

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database');
});

// Add values to the Student table
const Student = [
  {
    Reg_no: 123456,
    Password: 'password123',
    name: 'John Doe',
    email: 'john.doe@example.com',
    cgpa: 3.8,
    credits_obtained: 120,
    fee_paid: true,
    semester: 5,
    department_id: 1 // Assuming the department_id for the student
  },
  {
    reg_no: 234567,
    password: 'student234',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    cgpa: 3.5,
    credits_obtained: 110,
    fee_paid: true,
    semester: 4,
    department_id: 2
  },
  // Add 3 more tuples with similar structure
];

// Loop through each student value and insert into the Student table
Student.forEach((value) => {
  connection.query('INSERT INTO Student SET ?', value, (err, result) => {
    if (err) {
      console.error('Error adding values to Student table: ', err);
      return;
    }
    console.log('Values added to Student table');
  });
});

// Similarly, add 3 more tuples to the Student table

// Add values to the Results table
const Results = [
  {
    course_id: 1,
    student_reg_no: 123456,
    score_obtained: 90.5
  },
  {
    course_id: 2,
    student_reg_no: 234567,
    score_obtained: 85.0
  },
  // Add 3 more tuples with similar structure
];

// Loop through each result value and insert into the Results table
Results.forEach((value) => {
  connection.query('INSERT INTO Results SET ?', value, (err, result) => {
    if (err) {
      console.error('Error adding values to Results table: ', err);
      return;
    }
    console.log('Values added to Results table');
  });
});

// Similarly, add 3 more tuples to the Results table

// Add values to the Course_Info table
const CourseInfo = [
  {
    course_id: 1,
    course_name: 'Introduction to Computer Science',
    credits: 3
  },
  {
    course_id: 2,
    course_name: 'Data Structures',
    credits: 4
  },
  // Add 3 more tuples with similar structure
];

// Loop through each course info value and insert into the Course_Info table
CourseInfo.forEach((value) => {
  connection.query('INSERT INTO Course_Info SET ?', value, (err, result) => {
    if (err) {
      console.error('Error adding values to Course_Info table: ', err);
      return;
    }
    console.log('Values added to Course_Info table');
  });
});

// Similarly, add 3 more tuples to the Course_Info table

// Add values to the Fee_transaction table
const feeTransaction = [
  {
    student_reg_number: 123456,
    amount_paid: 500,
    semester: 5
  },
  {
    student_reg_number: 234567,
    amount_paid: 600,
    semester: 4
  },
  // Add 3 more tuples with similar structure
];

// Loop through each fee transaction value and insert into the Fee_transaction table
feeTransaction.forEach((value) => {
  connection.query('INSERT INTO Fee_transaction SET ?', value, (err, result) => {
    if (err) {
      console.error('Error adding values to Fee_transaction table: ', err);
      return;
    }
    console.log('Values added to Fee_transaction table');
  });
});

// Similarly, add 3 more tuples to the Fee_transaction table

// Add values to the Department table
const department = [
  {
    department_id: 1,
    department_name: 'Computer Science'
  },
  {
    department_id: 2,
    department_name: 'Electrical Engineering'
  },
  // Add 3 more tuples with similar structure
];

// Loop through each department value and insert into the Department table
department.forEach((value) => {
  connection.query('INSERT INTO Department SET ?', value, (err, result) => {
    if (err) {
      console.error('Error adding values to Department table: ', err);
      return;
    }
    console.log('Values added to Department table');
  });
});

// Similarly, add 3 more tuples to the Department table

// Add values to the Professor table
const professor = [
  {
    professor_id: 1,
    department_id: 1,
    name: 'Dr. Jane Smith',
    course_id: 1
  },
  {
    professor_id: 2,
    department_id: 2,
    name: 'Prof. John Doe',
    course_id: 2
  },
  // Add 3 more tuples with similar structure
];

// Loop through each professor value and insert into the Professor table
professor.forEach((value) => {
  connection.query('INSERT INTO Professor SET ?', value, (err, result) => {
    if (err) {
      console.error('Error adding values to Professor table: ', err);
      return;
    }
    console.log('Values added to Professor table');
  });
});

// Similarly, add 3 more tuples to the Professor table

// Add values to the Alumni table
const alumni = [
  {
    alumni_reg_no: 654321,
    alumni_dept: 1,
    alumni_company_id: 1001
  },
  {
    alumni_reg_no: 765432,
    alumni_dept: 2,
    alumni_company_id: 1002
  },
  // Add 3 more tuples with similar structure
];

// Loop through each alumni value and insert into the Alumni table
alumni.forEach((value) => {
  connection.query('INSERT INTO Alumni SET ?', value, (err, result) => {
    if (err) {
      console.error('Error adding values to Alumni table: ', err);
      return;
    }
    console.log('Values added to Alumni table');
  });
});

// Similarly, add 3 more tuples to the Alumni table

// Add values to the Alumni Alerts/Messages table
const alumniMessages = [
  {
    alumni_reg_no: 654321,
    alumni_message: 'Congratulations on your graduation!'
  },
  {
    alumni_reg_no: 765432,
    alumni_message: 'Best wishes for your future endeavors!'
  },
  // Add 3 more tuples with similar structure
];

// Loop through each alumni message value and insert into the Alumni Alerts/Messages table
alumniMessages.forEach((value) => {
  connection.query('INSERT INTO Alumni_Alerts_Messages SET ?', value, (err, result) => {
    if (err) {
      console.error('Error adding values to Alumni Alerts/Messages table: ', err);
      return;
    }
    console.log('Values added to Alumni Alerts/Messages table');
  });
});

// Similarly, add 3 more tuples to the Alumni Alerts/Messages table

// Add values to the Companies table
const companies = [
  {
    company_id: 1001,
    dept_id: 1,
    salary_offered: 60000,
    company_name: 'Tech Solutions Inc.'
  },
  {
    company_id: 1002,
    dept_id: 2,
    salary_offered: 65000,
    company_name: 'Innovate Corp.'
  },
  // Add 3 more tuples with similar structure
];

// Loop through each company value and insert into the Companies table
companies.forEach((value) => {
  connection.query('INSERT INTO Companies SET ?', value, (err, result) => {
    if (err) {
      console.error('Error adding values to Companies table: ', err);
      return;
    }
    console.log('Values added to Companies table');
  });
});

// Similarly, add 3 more tuples to the Companies table

// Close the connection after all operations
connection.end((err) => {
  if (err) {
    console.error('Error closing database connection: ', err);
    return;
  }
  console.log('Connection closed');
});
