const express = require('express');
const {
    getUserData,
    getNumOfRepos,
    getLanguageDist,
    getCommits,
    validateUsername,
} = require('./fetchers.js');

const app = express();
const port = 5050;



app.get('/api/user-data/:username', (req, res) => {
    getUserData(req.params.username)
        .then(data => res.json(data))
        .catch(e => res.json({ error: true }));
});

app.get('/api/repos/:username', (req, res) => {
    getNumOfRepos(req.params.username)
        .then(data => res.json(data))
        .catch(e => res.json({ error: true }));
});

app.get('/api/languages/:username', (req, res) => {
    getLanguageDist(req.params.username)
        .then(data => res.json(data))
        .catch(e => res.json({ error: true }));
});

app.get('/api/commits/:username', (req, res) => {
    getCommits(req.params.username)
        .then(data => res.json(data))
        .catch(e => res.json({ error: true }));
});

app.get('/api/validate/:username', (req, res) => {
    validateUsername(req.params.username)
        .then(isValid => res.json(isValid))
        .catch(e => res.json({ error: true }));
});


const logger = data => { console.log(data); return data; }


app.listen(port);


