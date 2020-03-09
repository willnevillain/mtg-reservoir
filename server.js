const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());

const printingsRoute = require('./routes/printings');


app.use('/printings', printingsRoute);

// Routes
app.get('/', (req, res) => {
  res.send('Root path');
});


// DB Connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection to DB established.');
});

app.use((err, req, res, next) => {
  return res.status(500).json({ error: err });
});


// Begin listening
app.listen(3000);
