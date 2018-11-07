import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Test2',
      fill: false,
      lineTension: 0.4,
      backgroundColor: 'rgba(179,188,255,1)',
      borderColor: 'rgba(179,188,255,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(179,188,255,1)',
      pointBackgroundColor: '#FFF',
      pointBorderWidth: 3,
      pointHoverRadius: 3,
      pointHoverBackgroundColor: 'rgba(179,188,255,1)',
      pointHoverBorderColor: 'rgba(179,188,255,1)',
      pointHoverBorderWidth: 3,
      pointRadius: 3,
      pointHitRadius: 10,
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
