// Main User Registration Authentication
//const { Student } = require('../../models/user');
const makeStudentAccount = require('./makeStudentAccount');

const registerAuth = (req, res) => {
    let errors = [];
    const { studentRegNumber, studentcgpa,studentEmail, studentName, studentBranch, studentPassword, studentcredits, studentsemester, studentPaid } = req.body;
    // Making sure all fields are filled
    if (!studentName || !studentcgpa|| !studentEmail || !studentBranch || !studentPassword || !studentRegNumber || !studentcredits || !studentsemester || !studentPaid ) {
        errors.push({ msg: "Please Fill all Fields!" });
    }

    if (studentPassword.length < 6) {
        errors.push({ msg: "Password must be atleast 6 characters!" });
    }


    // If there are errors, render the page again with the errors
    if (errors.length > 0) {
        res.render('register', {
            errors,
            studentName,
            studentcgpa,
            studentEmail,
            studentBranch,
            studentPassword,
            studentRegNumber,
            studentcredits,
            studentsemester,
            studentPaid
        })
    } else {

    makeStudentAccount(studentName,studentcgpa,studentEmail,studentBranch,studentPassword,studentRegNumber,studentcredits,studentsemester,studentPaid);

}
}
// Exporting the user authentication 

module.exports = registerAuth;
