// Imports
const Router = require('express');
const registerAuth = require('../public/js/registerAuth');
const isAuthenticatedStudent = require('../public/js/isAuthenticatedStudent');
const registerNewCompany = require('../public/js/registerNewCompany');
const multer = require('multer');
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'sunil',
    database: 'dbmsproj'
});


// Multer Storage
let Storage = multer.diskStorage({
    destination: 'public/uploads/',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

// Multer Upload
let upload = multer({
    storage: Storage,
});


// Creating the main router object
const router = Router();

// Adding all major router routes
router.get('/', (req, res) => {
    res.render('main');
})

// Dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

// Student Login
router.get('/studentLogin', (req, res) => {
    res.render('student');
})

// Student Login Post
router.post('/studentLogin', async (req, res) => {
    const { studentRegNumber, studentRegPassword } = req.body;

    try{
        // const connection = await pool.getConnection();
        // const student = await connection.execute(`SELECT * FROM Student WHERE Reg_no = ${studentRegNumber}`);
        // connection.release();
        isAuthenticatedStudent(studentRegNumber, studentRegPassword, res);
    }catch(err){
        console.log(err);
    }

})

// Admin Login
router.get('/adminLogin', (req, res) => {
    res.render('admin');
})


// Admin Login Post
router.post('/adminLogin', (req, res) => {
    const { adminUsername, adminPassword } = req.body;
    Student.findOne({ isAdmin: true })
        .then(admin => {
            if (admin) {
                if (adminUsername === admin.studentName && adminPassword === admin.studentPassword) {
                    // admin
                    res.render('adminDashboard');
                }
            }
            else {
                res.render('admin', { error: 'Invalid Credentials' });
            }

        })
});


// Register
router.get('/register', (req, res) => {
    res.render('register');
})

// Register Post
router.post('/register', (req, res) => {
    registerAuth(req, res);
})

// Companies
router.get('/companies', (req, res) => {
    Company.find({})
        .then(company => {
            res.render('companies', { company });
        })
})


// New Company
router.get('/newCompany', (req, res) => {
    res.render('newCompany');
})

//  New Company Post
router.post('/newCompany', upload.single('companyImage'), (req, res) => {
    registerNewCompany(req, res, req.file.filename);
})

// Logout
router.get('/logout', (req, res) => {
    res.render('main');
})

// Student Dashboard
router.get('/alumniAdvice', (req, res) => {
    res.render('alumniAdvice');
});

// Student Dashboard
router.get('/companiesAdminView', (req, res) => {
    Company.find({})
        .then(company => {
            res.render('adminCompanyView', { company });
        })
})



router.get('/companyInfo/:id', (req, res) => {
    Company.findOne({ companyName: req.params.id })
        .then(company => {
            res.render('companyInfo', { company });
        })
})

// Exporting this router object
module.exports = router;
