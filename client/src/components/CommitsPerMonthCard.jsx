import React, { useEffect } from 'react';
import Chart from 'chart.js';

const CommitsPerMonthCard = ({ commitsPerMonth }) => {


    useEffect(() => {
        const perMonthValues = Object.values(commitsPerMonth);
        const perMonthKeys = Object.keys(commitsPerMonth);
        const ctx = document.getElementById("commits-chart").getContext('2d');

        const data = {
            labels: perMonthKeys,
            datasets: [{
                data: perMonthValues,
                backgroundColor: '#40bd61',
            }]
        };

        const options = {
            legend: {
                display: false,
            },
            scaleShowValues: true,
            scales: {
                xAxes: [{
                    ticks: {
                        autoSkip: false
                    }
                }]
            },
            responsive: true,
            maintainAspectRatio: false,
        };

        Chart.Bar(ctx, {
            data,
            options,
        });
    }, [commitsPerMonth])

    return (
        <div className="card">
            <span className="card__label">Commits month spread</span>
            <div className="card__data-wrapper">
                <div className="chart-container-commits">
                    <canvas className="card__canvas-commits" id="commits-chart" ></canvas>
                </div>
            </div>
        </div>
    );
}

export default CommitsPerMonthCard;