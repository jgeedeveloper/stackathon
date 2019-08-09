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

    this.state = {};
  }

  componentDidMount() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: tradebookNumbers,
        datasets: [
          {
            label: 'Price',
            borderColor: 'rgb(99, 132, 255)',
            data: [...tradebookNumbers],
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
        <canvas id="myChart" width="1000" height="600" />
      </GraphContainer>
    );
  }
}
