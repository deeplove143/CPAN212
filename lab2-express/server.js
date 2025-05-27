const express = require('express');
const app = express();
const routes = require('./routes');  // ✅ Make sure this matches the filename

app.use('/', routes);  // ✅ This connects your routes

app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});
