import React, { useState, useEffect } from 'react';

const Header = ({ username, onBack }) => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        fetch(`/api/user-data/${username}`)
            .then(data => data.json())
            .then(setUserData);
    }, [username])


    return (
        <header className="header">
            <button onClick={onBack} className="header__back-btn"></button>
            <div className="container header__wrapper">
                <div className="header__data">
                    <h1 className="header__username">{username}</h1>
                    <div className="header__follow">
                        <span className="header__followers">
                            Followers : {userData.followers ? userData.followers : 0}
                        </span>
                        <span className="header__following">
                            Following : {userData.following ? userData.following : 0}
                        </span>
                    </div>
                </div>

                {
                    userData.img
                        ? <img className="header__img" src={userData.img} alt="profile" />
                        : <div className="header__img"></div>
                }

            </div>
        </header>
    );
}

export default Header;