import React from 'react';
import { useEffect, useState } from 'react';
import DataCard from './DataCard.jsx';
import LanguageCard from './LanguageCard.jsx';
import CommitsPerMonthCard from './CommitsPerMonthCard.jsx';
import LoaderCard from './LoaderCard.jsx';

const perMonthMOCK = {
    "count": 97,
    "perMonth": {
        "Jan": 64,
        "Feb": 2,
        "Mar": 0,
        "Apr": 22,
        "May": 8,
        "Jun": 0,
        "Jul": 1,
        "Aug": 0,
        "Sep": 0,
        "Okt": 0,
        "Nov": 0,
        "Dec": 0
    }
}


const Board = ({ username }) => {
    const [repos, setRepos] = useState(null);
    const [commits, setCommits] = useState(null);
    const [commitsPerMonth, setCommitsPerMonth] = useState(null);
    const [languagesMap, setLanguagesMap] = useState(null);

    useEffect(() => {
        fetch(`/api/repos/${username}`)
            .then(data => data.json())
            .then(setRepos)
            .catch(console.error);

        fetch(`/api/commits/${username}`)
            .then(data => data.json())
            .then(data => {
                setCommits(data.count);
                setCommitsPerMonth(data.perMonth);
            })
            .catch(console.error);

        fetch(`/api/languages/${username}`)
            .then(data => data.json())
            .then(data => setLanguagesMap(data))
            .catch(console.error);

    }, [username])

    return (
        <div className="board container">
            {repos ? <DataCard label="Public repos" data={repos} /> : <LoaderCard />}
            {languagesMap ? <LanguageCard languagesMap={languagesMap} /> : <LoaderCard />}
            {commits ? <DataCard label="Total commits to owned repos" data={commits} /> : <LoaderCard />}
            {commitsPerMonth ? <CommitsPerMonthCard commitsPerMonth={commitsPerMonth} /> : <LoaderCard />}
        </div>
    );
}

export default Board;