require('dotenv').config();
const app = require('./server.js');
const port = process.env.PORT || 3200;

// Server
app.listen(port, () => {
   console.log(`Listening on: http://localhost:${port}`);
});