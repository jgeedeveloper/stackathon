import React from 'react';
import Chart from 'chart.js';
import Styled from 'styled-components';
import { tradebookNumbers } from '../server/dbVars';

const GraphContainer = Styled.div`
  display: flex;
  justify-content: wrap;
  flex-direction: column;
`;

const GraphButtons = Styled.div`
  display: flex;
  justify-content: space-around;
`;

export default class MyChart extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPurchase: '',
      runSim: true,
    };

    this.addData = this.addData.bind(this);
    this.stopSim = this.stopSim.bind(this);
  }

  addData(counter) {
    if (tradebookNumbers.length && this.state.runSim) {
      setTimeout(() => {
        this.liteChart.data.labels.push(tradebookNumbers.shift());
        this.liteChart.data.datasets[0].data.push(tradebookNumbers.shift());
        this.liteChart.update();
        this.addData(counter);
      }, 1000);
    } else if (!this.state.runSim) {
      this.setState({
        runSim: true,
      });
    }
  }

  stopSim() {
    this.setState({
      runSim: false,
    });
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
        <canvas id="myChart" width="1000" height="600" />
        <GraphButtons>
          <button onClick={() => this.addData(0)}>Start Sim</button>
          <button onClick={() => this.stopSim()}>Stop Sim</button>
        </GraphButtons>
      </GraphContainer>
    );
  }
}
