import React from 'react';

const DataCard = ({ label, data }) => {
    return (
        <div className="card">
            <span className="card__label">{label}</span>
            <div className="card__data-wrapper">
                <h2 className="card__data">{data}</h2>
            </div>
        </div>
    );
}

export default DataCard;