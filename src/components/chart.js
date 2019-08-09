import React from 'react';
import Chart from 'chart.js';
import Styled from 'styled-components';
import { tradebookNumbers } from '../server/dbVars';

const GraphContainer = Styled.div`
  display: flex;
  justify-content: wrap;
`;

export default class MyChart extends React.Component {
  constructor() {
    super();

    this.addData = this.addData.bind(this);
  }

  // addData() {
  //   for (let i = 0; i < tradebookNumbers.length; i++) {
  //     setTimeout(() => {
  //       this.liteChart.data.labels.push(tradebookNumbers[i]);
  //       this.liteChart.data.datasets[0].data.push(tradebookNumbers[i]);
  //       this.liteChart.update();
  //     }, 5000);
  //   }
  // }

  addData(counter) {
    counter = counter || 0;
    if (counter < tradebookNumbers.length) {
      setTimeout(() => {
        this.liteChart.data.labels.push(tradebookNumbers[counter]);
        this.liteChart.data.datasets[0].data.push(tradebookNumbers[counter]);
        counter++;
        this.liteChart.update();
        this.addData(counter);
      }, 100);
    }
  }

  componentDidMount() {
    this.ctx = document.getElementById('myChart').getContext('2d');
    this.liteChart = new Chart(this.ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: [],
        datasets: [
          {
            label: 'Price',
            borderColor: 'rgb(99, 132, 255)',
            data: [],
          },
        ],
      },

      // Configuration options go here
      options: {
        responsive: false,
        legend: {
          labels: {
            fontColor: 'rgb(161, 247, 255)',
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                fontColor: 'rgb(161,247,255)',
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                fontColor: 'rgb(161,247,255)',
              },
            },
          ],
        },
      },
    });
  }

  render() {
    return (
      <GraphContainer>
        <button onClick={() => this.addData(0)}>Start Sim</button>
        <canvas id="myChart" width="1000" height="600" />
      </GraphContainer>
    );
  }
}
