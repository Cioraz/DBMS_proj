// Imports
const Router = require('express');
const registerAuth = require('../public/js/registerAuth');
const isAuthenticatedStudent = require('../public/js/isAuthenticatedStudent');
const isAuthenticatedAdmin = require('../public/js/isAuthenticatedAdmin.js')
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
    const { adminUsername, adminPassword} = req.body;

    try{
        isAuthenticatedAdmin(adminUsername, adminPassword, res);
    }catch(err){
        console.log(err);
    }
});

router.get('/newUser',(req,res)=>{
    res.render('register')
})

router.post('/newUser',(req,res)=>{

})


// Register
router.get('/register', (req, res) => {
    res.render('register');
})

// Register Post
router.post('/register', (req, res) => {
    registerAuth(req, res);
})

router.get('/alumni',async (req,res)=>{
    const connection = await pool.getConnection();
    const alumni = await connection.execute('SELECT Alumni.Reg_no,Alumni.Name, Message, Dept, Department_name, Company_name, Salary_offered FROM Alumni_Message Message, Alumni, Department, Companies WHERE Message.Reg_no = Alumni.Reg_no AND Alumni.Dept = Department.Department_id AND Companies.Company_id = Alumni.Company_id;')
    console.log(alumni);
    res.render('alumni',{alumni});
})

// Companies
router.get('/companies', async (req, res) => {
    // write the above in sql
    const connection = await pool.getConnection();
    const companies = await connection.execute('SELECT * FROM Companies');
    connection.release();
    res.render('companies', { companies });

})

router.get('/department',async (req,res)=>{
    const connection = await pool.getConnection();
    const departments = await connection.execute('SELECT * FROM Department');
    connection.release();
    console.log(departments)
    res.render('department',{departments});
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
