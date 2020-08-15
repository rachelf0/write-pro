const express = require('express');
// creates the server
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// creates the server port reservation
const PORT = process.env.PORT || 3001;
// the following 2 parts are necessary for all server.js files in order for routes to work
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// serve static
app.use(express.static('public'));

// server uses /api to access apiroutes
app.use('/api', apiRoutes);

// server uses /api to access htmlroutes
app.use('/', htmlRoutes);

// server listens on dynamic port ,3001 locally, or 80 on Heroku
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });