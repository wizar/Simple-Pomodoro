// Inspired by http://bl.ocks.org/mbostock/5100636
import * as d3 from 'd3';
import angular from 'angular';

function TimeGauge() {
  this.tau = Math.PI * 2;
  console.log(d3);
  this.svg = d3.select('svg');
  this.width = +this.svg.attr('width');
  this.height = +this.svg.attr('height');
  this.g = this.svg
    .append('g')
    .attr('transform', `translate(${this.width / 2},  ${this.height / 2})`);

  this.arc = d3.arc()
    .innerRadius(98)
    .outerRadius(100)
    .startAngle(0);

  this.background = this.g.append('path')
    .datum({ endAngle: Math.PI * 2 })
    .style('fill', '#ddd')
    .attr('d', this.arc);

  this.foreground = this.g.append('path')
    .datum({ endAngle: 0 })
    .attr('id', 'arc')
    .attr('d', this.arc);
}

TimeGauge.prototype.arcTween = function (newAngle) {
  const arc = this.arc;
  return function (d) {
    const interpolate = d3.interpolate(d.endAngle, newAngle);
    return function (t) {
      d.endAngle = interpolate(t);
      return arc(d);
    };
  };
};

TimeGauge.prototype.changeAngle = function (value, callback) {
  this.foreground.transition()
    .duration(750)
    .attrTween('d', this.arcTween(value * this.tau))
    .on('end', () => {
      if (angular.isFunction(callback)) {
        callback();
      }
    });
};

export default TimeGauge;
