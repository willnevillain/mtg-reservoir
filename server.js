require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./app/routes');
const importer = require('./scripts/mtg-importer');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());

// Start Route Definitions
app.get('/', (req, res) => {
  res.send('Root path');
});

app.post('/mtg-import', (req, res) => {
  importer();
  res.status(200).send('OK');
});

app.use(routes);
// End Route Definitions

// Start DB Connection and server start logic
const connect = () => {
  mongoose.connect(
    process.env.DB_CONNECTION,
    {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      console.log(err ? `** DB Connection - Error: ${err}` : '** DB Connection - OK'); // eslint-disable-line no-console
    },
  );
};
connect();
mongoose.connection.on('error', console.log); // eslint-disable-line no-console
mongoose.connection.on('disconnected', connect);
// End DB Connection Logic

// Start listening for requests
app.listen(app.get('port'), (err) => {
  if (err) {
    console.log(`** Error Starting Server ${err}`); // eslint-disable-line no-console
  }
  console.log('** Server starting'); // eslint-disable-line no-console
  console.log(`** Port: ${app.get('port')}`); // eslint-disable-line no-console
  console.log(`** Started listening at: ${new Date().toUTCString()}`); // eslint-disable-line no-console
});

module.exports = app;
