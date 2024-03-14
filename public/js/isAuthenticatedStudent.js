// Importing the required libraries
const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');

const isAuthenticatedStudent = async (studentRegNumber, password, res) => {

        const pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: 'sunil',
            database: 'dbmsproj',
        });

        const connection = await pool.getConnection();

        try{
            const student = await connection.execute(`SELECT * FROM Student WHERE Reg_no = ${studentRegNumber}`);

            if(student == null){
                console.log("User Not Found");
            }else{
                if (student[0][0].Password === password) {
                    console.log(student)
                    res.render('dashboard', { student });
                }
                else{
                    console.log("User Not Authenticated");
                    res.render('student');
                }
                // bcrypt.compare(password, student[0][0].Password, (err, isMatch) => {
                //     if (err) return 0
                //     if (isMatch) {
                //         res.render('dashboard', { student });
                //     } else {
                //         console.log("User Not Authenticated");
                //         res.render('student');
                //     }
                // })
            }
            connection.release();
           
            
        }catch(err){
            console.log(err);
        }

}

// Exporting the function
module.exports = isAuthenticatedStudent
