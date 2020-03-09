require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());

// Start Route Definitions
app.get('/', (req, res) => {
  res.send('Root path');
});
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
      const dbStatus = err ? `* DB Connection - Error: ${err}` : `* DB Connection - OK`;
      console.log('********************');
      console.log('* Server Starting');
      console.log(dbStatus);
    }
  );
};
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
  console.log(`* Port: ${app.get('port')}`);
  console.log(`* Started listening at: ${new Date().toUTCString()}`);
  console.log('********************');
});

module.exports = app;
