// get.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Define the path to db.json
const dbPath = path.join(__dirname, '../Db.json');

// GET route to retrieve data from db.json
router.get('/', (req, res) => {

  fs.readFile(dbPath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading db.json:', err);
      return res.status(500).send({ error: 'Internal Server Error' });
    }
    try {
      const jsonData = JSON.parse(data);
      res.send(jsonData)
      res.status(200).json(jsonData.posts);
    } catch (parseError) {
      console.error('Error parsing JSON data:', parseError);
      res.status(500).send({ error: 'Error parsing data' });
    }
  });
});

module.exports = router;
