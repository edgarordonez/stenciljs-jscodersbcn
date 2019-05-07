import { Component } from '@stencil/core';

@Component({
  tag: 'pie-chart-demo',
  styleUrl: 'pie-chart-demo.css',
})
export class MyComponent {
  GRAPH_DATA = {
    pieChart: {
      labelFormat: 'ANY',
      dataFormat: 'GROUPED_TWO_DIGITS',
    },
    styles: {
      width: '90%',
      height: '500px',
      margin: '20px 0',
    },
    colors: [
      '#98abc5',
      '#8a89a6',
      '#7b6888',
      '#6b486b',
      '#a05d56',
      '#d0743c',
      '#ff8c00',
    ],
    labels: ['<5', '5-13', '14-17', '18-24', '25-44', '45-64', '≥65'],
    data: [2704659, 4499890, 2159981, 3853788, 16106543, 8819342, 612463],
  };
  LEGEND_DATA = {
    labels: ['<5', '5-13', '14-17', '18-24', '25-44', '45-64', '≥65'],
    colors: [
      '#98abc5',
      '#8a89a6',
      '#7b6888',
      '#6b486b',
      '#a05d56',
      '#d0743c',
      '#ff8c00',
    ],
    type: 'vertical',
    styles: {
      width: 'auto',
      height: 'auto',
    },
  }

  render() {
    return (
        <pie-chart graphData={this.GRAPH_DATA}>
          <tooltip-chart slot="tooltip" align="left" />
          <legend-chart slot="legend" legendData={this.LEGEND_DATA} />
        </pie-chart>
    );
  }
}
