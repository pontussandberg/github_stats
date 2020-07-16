import React from 'react';

const Legend = ({ languagesMap }) => {
    console.log(languagesMap);

    const generateItems = () => languagesMap.labels.map((x, i) => (
        <div className="legend__item" key={i}>
            <div className="legend__color" style={{ background: languagesMap.colors[i] }}></div>
            <div className="legend__label">{x}</div>
        </div>
    ));



    if (languagesMap.labels) {
        return generateItems()
    }
    return null;
}

export default Legend;