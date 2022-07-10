
// Importing modules.
const express = require ('express');

// Express server configuration.
const app=express()
const port=3000;


// Import static files from the public folder.
app.use(express.static('public'));

// Import individual folders.
app.use('/css', express.static(__dirname + 'public/css'));

// Set ejs views and view engine. Using ejs.
app.set('views', './views');
app.set('view engine', 'ejs');

// Rendering with ejs - Get index.
 app.get('', (req, res) => {
 res.render('index');
})

// Rendering with ejs - Get about.
app.get('/about', (req, res) => {
    res.render('about');
   })

// Not using this since html was changed to ejs. Leaving as a reference.
// Get index and about files
// app.get('', (req, res) => {
//    res.sendFile(__dirname + '/views/index.html');
//})

// Start Express and listen on 3000.
app.listen(port, () => console.info ("Express is Listening on port 3000."));


// Start application with: node app.js 

// DEV Mode startup:
    // Install nodemon first to start dev mode. 
    // npm install nodemon --save-dev. Then execute: npm start

// ENDPOINTS    
    // Valid application url values are: 
        // http://127.0.0.1:3000/
        // http://127.0.0.1:3000/about