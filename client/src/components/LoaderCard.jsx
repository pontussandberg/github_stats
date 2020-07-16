import React from 'react';
import '../css/loader.css'

const LoaderCard = () => {
    return (
        <div className="card loader">
            <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default LoaderCard;