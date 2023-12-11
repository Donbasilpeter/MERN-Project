// CNumber:C0873418
// Student Name: Dittamol Peter

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://myuser:mypassword@localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.use(express.static('public'));

// Set up routes
app.use('/', require('./routes/userRoutes'));

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});