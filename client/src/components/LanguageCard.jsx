import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';
import chartShemaMOCK from '../languages-mock.json'
import Legend from './Legend.jsx';

const LanguageCard = ({ username }) => {

    const [chartSchema, setChartSchema] = useState({});



    useEffect(() => {
        if (chartSchema.languages) {
            const ctx = document.getElementById("languages-chart").getContext('2d');

            const data = {
                labels: chartSchema.labels,
                datasets: [{
                    data: chartSchema.languages,
                    backgroundColor: chartSchema.colors,
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
        }
    }, [chartSchema])

    useEffect(() => {
        fetch(`/api/languages/${username}`)
            .then(data => data.json())
            .then(data => setChartSchema(data))
            .catch(console.error);
    }, [username])




    return (
        <div className="card">
            <span className="card__label">Language distrubution</span>
            <div className="card__data-wrapper">
                <div className="chart-container-doughnut">
                    <canvas className="card__canvas" id="languages-chart" ></canvas>
                </div>

                <div className="legend">
                    <Legend chartSchema={chartSchema} />
                </div>

            </div>
        </div>
    );
}

export default LanguageCard;