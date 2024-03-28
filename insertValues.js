const mysql = require('mysql2');  

const insertValues = () => {
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
    Name: 'John Doe',
    Email: 'john.doe@example.com',
    CGPA: 3.8,
    Credits_Obtained: 120,
    Fee_Paid: true,
    Semester: 5,
    Department_id: 1 // Assuming the department_id for the student
  },
  {
    Reg_no: 234567,
    Password: 'student234',
    Name: 'Jane Smith',
    Email: 'jane.smith@example.com',
    CGPA: 3.5,
    Credits_Obtained: 110,
    Fee_Paid: true,
    Semester: 4,
    Department_id: 2
  },
  // Add 3 more tuples with similar structure
];

// Loop through each student value and insert into the Student table
Student.forEach((value) => {
  connection.query('INSERT INTO Student SET ? ', value, (err, result) => {
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
    Course_id: 1,
    Student_Reg_no: 123456,
    Score_obtained: 90.5
  },
  {
    Course_id: 2,
    Student_Reg_no: 234567,
    Score_obtained: 85.0
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
    Course_id: 1,
    Course_name: 'Introduction to Computer Science',
    Credits: 3
  },
  {
    Course_id: 2,
    Course_name: 'Data Structures',
    Credits: 4
  },
  // Add 3 more tuples with similar structure
];

// Loop through each course info value and insert into the Course_Info table
CourseInfo.forEach((value) => {
  connection.query('INSERT INTO Course_info SET ?', value, (err, result) => {
    if (err) {
      console.error('Error adding values to Course_info table: ', err);
      return;
    }
    console.log('Values added to Course_Info table');
  });
});

// Similarly, add 3 more tuples to the Course_Info table

// Add values to the Fee_transaction table
const feeTransaction = [
  {
    Reg_no: 123456,
    Amount_paid: 500,
    Semester: 5
  },
  {
    Reg_no: 234567,
    Amount_paid: 600,
    Semester: 4
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
    Department_id: 1,
    Department_name: 'Computer Science'
  },
  {
    Department_id: 2,
    Department_name: 'Electrical Engineering'
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
    Professor_id: 1,
    Department_id: 1,
    Name: 'Dr. Jane Smith',
    Course_id: 1
  },
  {
    Professor_id: 2,
    Department_id: 2,
    Name: 'Prof. John Doe',
    Course_id: 2
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
    Reg_no: 654321,
    Dept: 1,
    Company_id: 1001,
    Name: "John Marire"
  },
  {
    Reg_no: 765432,
    Dept: 2,
    Company_id: 1002,
    Name: "Ram Lal"
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
    Reg_no: 654321,
    Message: 'Congratulations on your graduation!'
  },
  {
    Reg_no: 765432,
    Message: 'Best wishes for your future endeavors!'
  },
  // Add 3 more tuples with similar structure
];

// Loop through each alumni message value and insert into the Alumni Alerts/Messages table
alumniMessages.forEach((value) => {
  connection.query('INSERT INTO Alumni_Message SET ?', value, (err, result) => {
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
    Company_id: 1001,
    Dept_id: 1,
    Salary_offered: 60000,
    Company_name: 'Tech Solutions Inc.'
  },
  {
    Company_id: 1002,
    Dept_id: 2,
    Salary_offered: 65000,
    Company_name: 'Innovate Corp.'
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


}

module.exports = insertValues;
