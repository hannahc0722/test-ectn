import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../styles/WasteComp.css';

const Homepage = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Inorganic', 'Fruits', 'Vegetables', 'Grains'],
        datasets: [{
          label: 'Waste Composition',
          data: [280, 75, 20, 15],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
          ],
          borderColor: [
            'rgba(255, 255, 255, 1)'
          ],
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            align: 'start',
            labels: {
              boxWidth: 20,
              padding: 40,
              usePointStyle: true
            }
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
            <h2>Waste Composition Analysis</h2>
          </div>
          <div className="chart-container">
            <canvas id="myChart"></canvas>
          </div>
        </div>
        <div className="right-panel">
          <div className="description-box">
            <h3>ALLEGHENY GENERAL HOSPITAL</h3>
            <sub>320 E North Ave, Pittsburgh, PA</sub>
          </div>
          <div className="date-sample-box">
            <p><strong>Dates:</strong> 3/25/2024 - 4/25/2024</p>
            <p><strong>Sample Images:</strong> <a href="#gallery">View Here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
