import React, { useState, useEffect } from 'react';
import userDataMOCK from '../user-data-mock.json';

const Header = ({ username }) => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch(`/api/user-data/${username}`)
            .then(data => data.json())
            .then(setUserData);
    }, [username])


    if (userData) {
        return (
            <header className="header">
                <div className="container header__wrapper">
                    <div className="header__data">
                        <h1 className="header__username">{username}</h1>
                        <div className="header__follow">
                            <span className="header__followers">Followers : {userData.followers}</span>
                            <span className="header__following">Following : {userData.following}</span>
                        </div>
                    </div>
                    <img className="header__img" src={userData.img} alt="profile" />
                </div>
            </header>
        );
    }
    return (
        <header className="header">
            <div className="container header__wrapper">
                <div className="header__data">
                    <h1 className="header__username">{username}</h1>
                    <div className="header__follow">
                        <span className="header__followers">0</span>
                        <span className="header__following">0</span>
                    </div>
                </div>
                <div className="header__img"></div>
            </div>
        </header>
    )
}

export default Header;