// required libraries
const express = require('express');

// set port to 3001
const PORT = process.env.PORT || 3001;
// create a variable to call express
const app = express();
// routes for database functions
const apiRoutes = require('./routes/apiRoutes');
// routes for html pages
const htmlRoutes = require('./routes/htmlRoutes');

// required middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// express default listen method
app.listen(PORT, () => {
   console.log(`SERVER listening now on port ${PORT}`)
});