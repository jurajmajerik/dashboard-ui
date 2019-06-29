/* eslint-disable */
import React from 'react';
import * as d3 from 'd3';
import 'd3-selection-multi';

export default class BarChart extends React.Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() { // eslint-disable-line class-methods-use-this
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 960 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    const parseDate = d3.timeParse('%Y%m%d');

    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    const area = d3.area()
      .x(d => x(d.date))
      .y0(height)
      .y1(d => y(d.temperature));

    const svg = d3.select('.bar-chart').append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);


    const data = [
      { date: 20111001, temperature: 50 },
      { date: 20111002, temperature: 70 },
      { date: 20111003, temperature: 60 },
      { date: 20111004, temperature: 90 },
      { date: 20111005, temperature: 100 },
      { date: 20111006, temperature: 80 },
      { date: 20111007, temperature: 70 },
      { date: 20111008, temperature: 80 },
      { date: 20111009, temperature: 60 },
      { date: 20111010, temperature: 70 },
      { date: 20111011, temperature: 70 },
      { date: 20111012, temperature: 60 },
      { date: 20111013, temperature: 60 },
      { date: 20111014, temperature: 90 },
      { date: 20111015, temperature: 70 },
      { date: 20111016, temperature: 80 },
      { date: 20111017, temperature: 70 },
      { date: 20111018, temperature: 80 },
      { date: 20111019, temperature: 60 },
      { date: 20111020, temperature: 70 },
      { date: 20111021, temperature: 70 },
      { date: 20111022, temperature: 60 },
    ];

    data.forEach((d) => {
      d.date = parseDate(d.date);
      d.temperature = +d.temperature;
    });

    x.domain([data[0].date, data[data.length - 1].date]);
    y.domain(d3.extent(data, d => d.temperature));

    svg.append('linearGradient')
      .attr('id', 'temperature-gradient')
      .attr('gradientUnits', 'userSpaceOnUse')
      .attr('x1', 0)
      .attr('y1', y(50))
      .attr('x2', 0)
      .attr('y2', y(100))
      .selectAll('stop')
      .data([
        { offset: '0%', color: 'rgb(46, 49, 66, 0.4)' },
        // { offset: '20%', color: 'rgb(128, 128, 128, 0.3)' },
        { offset: '100%', color: 'rgb(77, 138, 185, 0.4)' },
      ])
      .enter()
      .append('stop')
      .attr('offset', d => d.offset)
      .attr('stop-color', d => d.color);

    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .attr('class', 'y axis')
      .call(d3.axisLeft(y))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end');

    svg.append('path')
      .datum(data)
      .attr('class', 'area')
      .attr('d', area);

    const valueline = d3.line()
      .x(d => x(d.date))
      .y(d => y(d.temperature));

    // Add the valueline path.
    svg.append('path')
      .data([data])
      .attr('class', 'line')
      .attr('d', valueline);

  }

  render() {
    return (
      <div className="bar-chart box"></div>
    );
  }
  
}