import React, { Component } from 'react';
import * as d3 from "d3";
import { scaleLinear,scaleOrdinal } from "d3-scale";


class BarChart extends React.Component {
    render() {
      return (
        <Chart width={this.props.width} height={this.props.height}>
          <DataSeries
            data={[20, 10, 5, 8, 15, 10]}
            width={this.props.width}
            height={this.props.height}
            color="cornflowerblue"
          />
        </Chart>
      );
    }
  }
  
  class DataSeries extends React.Component {
    render() {
    //   const yScale = d3.scale.Linear()
    //     .domain([0, d3.max(this.props.data)])
    //     .range([0, this.props.height]);
      const yScale = scaleLinear()
        .domain([0, d3.max(this.props.data)])
        .range([0, this.props.height]);
      
      // const xScale = scaleOrdinal()
      //   .domain(d3.range(this.props.data.length))
      //   .range([0, this.props.width], 0.05);
      // const xScale = d3.scaleBand().rangeRound([0, this.props.width]).padding(0.1);

      const xScale = d3.scaleBand().rangeRound([0, this.props.width]).padding(0.1);
      // // scaleOrdinal()
      // .domain(d3.range(this.props.data.length))
      // .range([0, this.props.width], 0.05);
      
        // .scaleBand()
        // .rangeRound([0, width])
      var x = d3.scaleBand()
      .rangeRound([0, this.props.width])
      .padding(0.1);

      var y = d3.scaleLinear()
          .range([this.props.height, 0]);
      
      const bars = this.props.data.map((point, i) => {
        return (
          <Bar
            height={yScale(point)}
            width={this.props.height - y(point)}
            offset={x(point)}
            availableHeight={this.props.height}
            color={this.props.color}
            key={i}
          />
        );
      });
  
      return <g>{bars}</g>
    }
  }
  
  DataSeries.defaultProps = {
    title: 'Title',
    data: ["France","US","dsa","da","adad","eqad"]
  };
  
  class Bar extends React.Component {
    render() {
      return (
        <rect
          fill={this.props.color}
          width={this.props.width}
          height={this.props.height}
          x={this.props.offset}
          y={this.props.availableHeight - this.props.height}
        />
      );
    }
  }
  
  Bar.defaultProps = {
    width: 0,
    height: 0,
    offset: 0
  };
  
  class Chart extends React.Component {
    render() {
      return (
        <svg width={this.props.width} height={this.props.height}>{this.props.children}</svg>
        // <div></div>
      );
    }
  }
  
  export default BarChart;
