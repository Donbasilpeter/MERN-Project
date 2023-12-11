// CNumber:C0873418
// Student Name: Dittamol Peter

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://admin:password@localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors())

// Set up routes
app.use('/', require('./routes/userRoutes'));

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
