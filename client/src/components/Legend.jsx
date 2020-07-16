import React from 'react';

const Legend = ({ chartSchema }) => {

    const generateItems = () => chartSchema.labels.map((x, i) => (
        <div className="legend__item" key={i}>
            <div className="legend__color" style={{ background: chartSchema.colors[i] }}></div>
            <div className="legend__label">{x}</div>
        </div>
    ));



    if (chartSchema.labels) {
        return generateItems()
    }
    return null;
}

export default Legend;