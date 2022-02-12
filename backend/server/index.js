const express = require('express');
const axios = require('axios');
const path = require('path');
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'dist')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'dist', 'index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})