import React from 'react';
import Chart from 'chart.js';

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
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'My First dataset',
            // backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      },

      // Configuration options go here
      options: {},
    });
  }

  render() {
    return <canvas id="myChart" />;
  }
}
