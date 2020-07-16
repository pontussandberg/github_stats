const fetch = require('node-fetch');
const {
    merger,
    unNestCommits,
    deltaNowThen,
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



const getTotalCommits = username => fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => Promise.all(repos.map(repo => fetch(repo.commits_url.replace('{/sha}', ''))
        .then(response => response.json()))))
    .then(unNestCommits);


const getCommitsPerMonth = username => fetch(`https://api.github.com/users/${username}`)
    .then(userData => userData.json())
    .then(userData => deltaNowThen(userData.created_at))
    .then(days => getTotalCommits(username).then(commits => commits / days))




module.exports = {
    getUserData,
    getNumOfRepos,
    getLanguageDist,
    getTotalCommits,
    getCommitsPerMonth,
};





const logger = (x) => { console.log(x); return x };

// ### Need an error handler for when api limit has been reached ###
const checkApiRate = err => null


// ### Needs to be impelmented ###
const isUser = obj => obj.message === 'Not Found';
const testUnknown = () => {
    fetch('https://api.github.com/users/pontussandberg1')
        .then(response => response.json())
        .then(console.log);
}
