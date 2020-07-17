const fetch = require('node-fetch');
const {
    merger,
    formatCommits,
    createChartSchema,
} = require('./utils.js');

const getUserData = username => fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => ({
        followers: data.followers,
        following: data.following,
        img: data.avatar_url,
        username,
    }));


const getNumOfRepos = username => fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => repos.length);


const getLanguageDist = username => fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => Promise.all(repos.map(repo => fetch(repo.languages_url)
        .then(response => response.json()))))
    .then(merger)
    .then(createChartSchema);



const getCommits = username => fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => Promise.all(repos.map(repo => fetch(repo.commits_url.replace('{/sha}', ''))
        .then(response => response.json()))))
    .then(formatCommits);


const validateUsername = username => fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(result => result.id ? { isValid: true } : { isValid: false })



module.exports = {
    getUserData,
    getNumOfRepos,
    getLanguageDist,
    getCommits,
    validateUsername,
};
