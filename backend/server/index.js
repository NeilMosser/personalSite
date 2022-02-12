const express = require('express');
const axios = require('axios');
const path = require('path');
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'dist')));

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})