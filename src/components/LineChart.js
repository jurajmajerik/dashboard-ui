/* eslint-disable */
import React from 'react';
import * as d3 from 'd3';
import 'd3-selection-multi';

import getHistoricalData from '../_helpers/getHistoricalData';
import getCounts from '../_helpers/getCounts';

export default class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHistorical: getHistoricalData(this.props.title),
    };
  }
  
  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate(prevProps) {
    // Update today's article count
    if (this.props.todaysCount !== prevProps.todaysCount) {
      this.updateLatest();
    }

    // Draw new chart on country change
    if (this.props.title !== prevProps.title) {
      this.drawNewChart();
    }
  }

  drawNewChart() {
    this.setState({ dataHistorical: getHistoricalData(this.props.title) }, () => {
      d3.select('.bar-chart').selectAll('*').remove();
      this.drawChart();
    });
  }

  updateLatest() {
    d3.select('.bar-chart').selectAll('*').remove();
    this.drawChart();
  }

  drawChart() {
    const { dataHistorical } = this.state;
    const { todaysCount } = this.props;
    dataHistorical[dataHistorical.length - 1].count = todaysCount;

    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = window.innerWidth - 360 - margin.left - margin.right;
    const height = 150 - margin.top - margin.bottom;

    const x = d3.scaleLinear().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    const area = d3.area()
      .curve(d3.curveMonotoneX)
      .x(d => x(d.date))
      .y0(height)
      .y1(d => y(d.count));

    const svg = d3.select('.bar-chart').append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    x.domain([dataHistorical[0].date, dataHistorical[dataHistorical.length - 1].date]);
    y.domain(d3.extent(dataHistorical, d => d.count));

    svg.append('linearGradient')
      .attr('id', 'temperature-gradient')
      .attr('gradientUnits', 'userSpaceOnUse')
      .attr('x1', 0)
      .attr('y1', y(Math.min(...getCounts(dataHistorical))))
      .attr('x2', 0)
      .attr('y2', y(Math.max(...getCounts(dataHistorical))))
      .selectAll('stop')
      .data([
        { offset: '0%', color: 'rgb(46, 49, 66, 0.4)' },
        { offset: '100%', color: 'rgb(77, 138, 185, 0.4)' },
      ])
      .enter()
      .append('stop')
      .attr('offset', d => d.offset)
      .attr('stop-color', d => d.color);

    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).tickFormat(d => `wk${d}`));

    svg.append('g')
      .attr('class', 'y axis')
      .call(d3.axisLeft(y))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 1)
      .attr('dy', '.71em')
      .style('text-anchor', 'end');

    svg.append('path')
      .datum(dataHistorical)
      .attr('class', 'area')
      .attr('d', area);

    const valueline = d3.line()
      .x(d => x(d.date))
      .y(d => y(d.count))
      .curve(d3.curveMonotoneX);

    // Add the valueline path.
    svg.append('path')
      .data([dataHistorical])
      .attr('class', 'line')
      .attr('d', valueline);
    
      const newCount = dataHistorical[dataHistorical.length - 1].count;
      svg.append("circle")
      .style("stroke", "white")
      .style("fill", "#2E3142")
      .attr("r", 3)
      .attr("cx", window.innerWidth - 431)
      .attr("cy", y(newCount));

      svg.append('line')
      .style("stroke", "#6d738a")
      .style("fill", "#white")
      .attr('x1', 0)
      .attr('y1', y(newCount))
      .attr('x2', window.innerWidth - 360 - margin.left - margin.right)
      .attr('y2', y(newCount))
      .attr('stroke-width', 1 )
      .attr('stroke-dasharray', '1.5, 1.5' );
  }

  render() {
    const { title } = this.props;
    return (
        <div className="bar-chart-wrapper box">
          <div className="bar-chart-title">{title}</div>
          <div className="bar-chart"></div>
        </div>
    );
  }
}
