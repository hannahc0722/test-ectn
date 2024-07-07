import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../styles/WasteDiv.css';

const WasteDiv = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Food Waste Diverted (tons)',
            data: [10, 20, 15, 25, 30, 40, 35, 45, 50, 60, 55, 70],
            backgroundColor: 'rgba(75, 192, 192, 0.8)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            barPercentage: 0.5,
            categoryPercentage: 0.5
          },
          {
            label: 'CO2 Diverted (tons)',
            data: [5, 10, 8, 12, 15, 20, 18, 22, 25, 30, 28, 35],
            backgroundColor: 'rgba(255, 99, 132, 0.8)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            barPercentage: 0.5,
            categoryPercentage: 0.5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return value + ' tons';
              }
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          title: {
            display: true,
            text: 'Food Waste and CO2 Diversion (tons)',
            padding: {
              top: 10,
              bottom: 30
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += context.parsed.y + ' tons';
                }
                return label;
              }
            }
          }
        },
        layout: {
          padding: {
            top: 20,
            left: 10,
            right: 10,
            bottom: 10
          }
        }
      }
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="blue-section">
      <div id="data-container" className="comp-kbgakxea_r_comp-lwpfzwxa-container">
        <div className="left-panel">
          <div className="title-box">
            <h2>Food Waste and CO2 Diversion by Month</h2>
          </div>
          <div className="chart-container">
            <canvas id="myChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteDiv;
