import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['', '', '', '', '', '', 'Today'],
  datasets: [
    {
      label: 'CryptoKitties Test',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(179,188,255,1)',
      borderWidth: 1,
      borderColor: 'rgba(179,188,255,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(179,188,255,1)',
      pointBackgroundColor: 'rgba(179,188,255,1)',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: 'rgba(179,188,255,1)',
      pointHoverBorderColor: 'rgba(179,188,255,1)',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 10,
      showLine: true,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default React.createClass({
  displayName: 'LineExample',

  render() {
    return (
      <div>
        <h2>Line TEST</h2>
        <Line data={data} />
      </div>
    );
  }
});
