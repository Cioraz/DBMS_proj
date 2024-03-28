// Importing the required libraries
const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');

const isAuthenticatedAdmin = async (studentRegNumber, password, res) => {

        const pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: 'sunil',
            database: 'dbmsproj',
        });

        const connection = await pool.getConnection();

        try{
            const admin = await connection.execute(`SELECT * FROM Student WHERE Reg_no = ${studentRegNumber}`);

            if(admin == null){
                console.log("User Not Found");
            }else{
                if (admin[0][0].Password === password) {
                    console.log(admin)
                    res.render('adminDashboard', { admin });
                }
                else{
                    console.log("User Not Authenticated");
                    res.render('admin');
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
module.exports = isAuthenticatedAdmin;
