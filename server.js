require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./app/routes');
const importer = require('./scripts/mtg-importer');
const loadModels = require('./app/models');

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
      useUnifiedTopology: true
    },
    (err) => {
      console.log(err ? `** DB Connection - Error: ${err}` : `** DB Connection - OK`);
      loadModels();
    }
  );
};
connect();
mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);
// End DB Connection Logic

// Start middleware registration
app.use((err, req, res, next) => {
  return res.status(500).json({ error: err });
});
// End middleware registration

// Start listening for requests
app.listen(app.get('port'), (err) => {
  console.log('** Server starting');
  console.log(`** Port: ${app.get('port')}`);
  console.log(`** Started listening at: ${new Date().toUTCString()}`);
});

module.exports = app;
