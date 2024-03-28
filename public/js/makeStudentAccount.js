const bcrypt = require('bcryptjs');
const sendMail = require('./mailStudentEmail.js')
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'sunil',
    database: 'dbmsproj'
});
// makeStudentAccount(studentName,studentEmail,studentBranch,studentPassword,studentRegNumber,studentcredits,studentsemester,studentPaid);
// Making the student account
const makeStudentAccount = async (studentName,studentcgpa ,studentEmail, studentBranch, studentPassword, studentRegNumber,studentcredits,studentsemester,studentPaid,res, req) => {
   const connection = await pool.getConnection();

  // Hash the student password before insertion for improved security
  const hashedPassword = await bcrypt.hash(studentPassword, 10); // Adjust cost factor as needed

  try {
    const [result] = await connection.execute(
      `INSERT INTO Student (Reg_no, Password, Name, Email, CGPA, Credits_Obtained, Fee_Paid, Semester, Department_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)`,
      [studentRegNumber, hashedPassword, studentName, studentEmail, studentcgpa , studentcredits,studentPaid ,studentsemester, studentBranch]
    );
    res.render('login')
    

  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating student account'); // Handle errors gracefully
  } finally {
    connection.release(); // Release the connection back to the pool
  } 
}

// Exporting the function
module.exports = makeStudentAccount;
