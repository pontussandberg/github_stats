import React, { useEffect } from 'react';
import Chart from 'chart.js';
import Legend from './Legend.jsx';

const LanguageCard = ({ languagesMap }) => {

    useEffect(() => {
        const ctx = document.getElementById("languages-chart").getContext('2d');

        const data = {
            labels: languagesMap.labels,
            datasets: [{
                data: languagesMap.languages,
                backgroundColor: languagesMap.colors,
            }]
        };
        const options = {
            // legend: 'right',
            legend: {
                display: false,
            },
            responsive: true,
            maintainAspectRatio: false,
        };

        Chart.Doughnut(ctx, {
            data,
            options,
        });

    }, [languagesMap])

    return (
        <div className="card">
            <span className="card__label">Language distrubution</span>
            <div className="card__data-wrapper">
                <div className="card__chart-container-doughnut">
                    <canvas className="card__canvas" id="languages-chart" ></canvas>
                </div>

                <div className="legend">
                    <Legend languagesMap={languagesMap} />
                </div>

            </div>
        </div>
    );
}

export default LanguageCard;