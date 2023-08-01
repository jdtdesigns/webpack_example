const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => console.log('Server started on port %s', PORT));