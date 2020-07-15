const fetch = require('node-fetch');
const express = require('express');
const utils = require('./utils.js');

const app = express();
const port = 5050;



app.get('/api/user-data/:username', (req, res) => {
    getUser(req.params.username);
});


app.listen(port);


