import React from 'react';
import { useEffect, useState } from 'react';
import DataCard from './DataCard.jsx';
import LanguageCard from './LanguageCard.jsx';
import CommitsPerMonthCard from './CommitsPerMonthCard.jsx';

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
    const [repos, setRepos] = useState(0);
    const [commits, setCommits] = useState(0);
    const [commitsPerMonth, setCommitsPerMonth] = useState(null);

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
    }, [username])

    return (
        <div className="board container">
            <DataCard label="Public repos" data={repos} />
            <LanguageCard username={username} />
            <DataCard label="Total commits to owned repos" data={commits} />
            <CommitsPerMonthCard commitsPerMonth={commitsPerMonth} />
        </div>
    );
}

export default Board;