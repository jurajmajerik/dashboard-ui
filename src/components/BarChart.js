/* eslint-disable */
import React from 'react';
import * as d3 from 'd3';
import 'd3-selection-multi';

import getHistoricalData from '../_helpers/getHistoricalData';

export default class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getHistoricalData(),
      todaysValue: 50,
    };
  }
  
  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate(prevProps, prevState) {
    // Filter is 'all'
    if (this.props.title === 'All Countries'
        && this.state.todaysValue === prevState.todaysValue) {
      this.updateLatest();
      return
    }
    // New Country received
    if (this.props.title !== prevProps.title) {
      this.drawNewChart();
    // New article received
    } else if (
        this.props.title === this.props.latestArticleCountry
        && this.state.todaysValue === prevState.todaysValue
        ) {
      this.updateLatest();
    }
  }

  drawNewChart() {
    this.setState({ data: getHistoricalData() }, () => {
      d3.select('.bar-chart').selectAll('*').remove();
      this.drawChart();
    });
  }

  updateLatest() {
    this.setState(prevState => (
      { todaysValue: prevState.todaysValue + 1 }
    ),() => {
      d3.select('.bar-chart').selectAll('*').remove();
      this.drawChart();
    });
  }

  drawChart() {
    const { data, todaysValue } = this.state;
    data[data.length - 1].count = todaysValue;

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

    x.domain([data[0].date, data[data.length - 1].date]);
    y.domain(d3.extent(data, d => d.count));

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
      .datum(data)
      .attr('class', 'area')
      .attr('d', area);

    const valueline = d3.line()
      .x(d => x(d.date))
      .y(d => y(d.count))
      .curve(d3.curveMonotoneX);

    // Add the valueline path.
    svg.append('path')
      .data([data])
      .attr('class', 'line')
      .attr('d', valueline);
    
      const newCount = data[data.length - 1].count;
      svg.append("circle")
      .style("stroke", "white")
      .style("fill", "#2E3142")
      .attr("r", 3)
      .attr("cx", window.innerWidth - 431)
      .attr("cy", (21 - newCount + 80) * 1.9);

      svg.append('line')
      .style("stroke", "#6d738a")
      .style("fill", "#white")
      .attr('x1', 0)
      .attr('y1', (21 - newCount + 80) * 1.9)
      .attr('x2', window.innerWidth - 360 - margin.left - margin.right)
      .attr('y2', (21 - newCount + 80) * 1.9)
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
