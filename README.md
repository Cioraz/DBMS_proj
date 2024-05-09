# DBMS Project (2023-2024)

<h1> INSTALLATION STEPS:</h1>

- First install MySQL to serve as the database.
- ```git clone https://github.com/Cioraz/DBMS_proj```
- ```cd DBMS_proj```
- ```npm install```
- ```npm install --save-dev nodemon ``` (to run the server.js file which showcases the main app).
- Finally type ```nodemon server.js ```(to run the main file).
  
Now go to your MYSQL shell on terminal and login to it
- Type ``` create database if not exists dbmsproj; ```
- Now head over to the sever.js file and comment out the insertValues() function and uncomment the createTables() function. After doing this go to terminal and type ```nodemon server.js```
- Now after tables get created ```ctrl+c``` to come out.
- Again go back to the ```server.js``` file and now uncomment the insertValues() function and comment the createTables() function. After this again go to terminal and type ```nodemon server.js```

# LIST OF IMPLEMENTED FEATURES :
- A login and registration system for new students to be registered on the iris database
- An email system to send a mail to the new registered user about their roll number and registration number.
- A system to generate roll number (based on number of candidates in that particular branch) and generate registration number (based on number of students registered on the iris database)
- A dashboard separate for the students and for the admin.
- The data gets stored in the students collection of the mongodb database where the password of the user is hashed using bcryptjs
- The admin has the power to register new companies to the database using the (Add new company) tab of their navbar view
- The new company to be registered must also be given a company icon so that it can be displayed on the company tab.

### STUDENT DASHBOARD
- The student dashboard view has 3 compartments, companies, alumni advice and contact us
- In the companies view, the companies which are registered through the admin are made visible which can be later clicked upon for viewing details about the company

### ADMIN DASHBOARD
- The admin dashboard also has 3 compartments, a company view, an add new company tab and contact us
- The company view shows all the companies visiting the campus for placements.
- The add new company can be used to upload details regarding a new company visiting the campus for placement season.
- The add company will take the details and store on mongo database, it also takes the company icon which is latered displayed on the companies tab in the dashboard of student/admin view
- Ensure the size of icons uploaded on company site to be of same size (preferably 500x130) so that bootstrap can nicely organise it.

# FUTURE FEATURES:

- To make the UI/UX look more robust and user friendly.
- To add full authentication for login and registration.
- To add flash messages and use express sessions to temporarily store user data.
- The multer library can also be used to add the pdf of resumes, which here has only be used to store company images.
- Encrypting the passwords before inserting it into the MySQL database.

# SCREENSHOTS
- Schema Diagram
![DBMS mini project](https://github.com/Cioraz/DBMS_proj/assets/76161837/aa38943e-4475-40f5-aa79-5a2cb351dc23)

# LIST OF BUGS :
- User can log on to admin or any other account using the url and without knowing password (can be fixed using passport authentication)

# REFERENCES USED : 
- Adding Icons : https://www.youtube.com/watch?v=7oiJj5FcyTQ&t=1s</p>
- Installing Nodemon : https://www.youtube.com/watch?v=4N0d8HhU5DE&t=107s</p>
