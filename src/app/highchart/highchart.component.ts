import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from "highcharts";
import * as HighchartsMore from "highcharts/highcharts-more";
import * as HighchartsExporting from "highcharts/modules/exporting";
import { chart, Series } from 'highcharts';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent {

  chart: Chart = new Chart;

  ngOnInit() {
    this.init();
  }

  addPoint() {
    if (this.chart) {
      this.chart.addPoint(Math.floor(Math.random() * 10));
    } else {
      alert('init chart, first!');
    }
  }

  addSerie() {
    this.chart.addSeries({
      name: 'Line',
      type: 'line',
      data: [22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]},true,true);
  }


  removePoint() {
    this.chart.removePoint(this.chart.ref.series[0].data.length - 1);
  }

  removeSerie() {
    this.chart.removeSeries(this.chart.ref.series.length - 1);
  }

  init() {
    let chart = new Chart({
      chart: {
        type: 'line',
        height: 320
      },
      title: {
        text: 'Collatz conjeture'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Line 1',
        type: 'line',
        data: [1, 2, 3]
      }]
    });
    chart.addPoint(4);
    this.chart = chart;
    chart.addPoint(5);
    setTimeout(() => {
      chart.addPoint(6);
    }, 2000);

    chart.ref$.subscribe(console.log);
  }




  // chart = new Chart({
  //   chart: {
  //     type: 'line',
  //     height: 350
  //   },
  //   title: {
  //     text: 'Collatz'
  //   },
  //   xAxis: {
  //     categories: [
  //       'Jan',
  //       'Feb',
  //       'Mar',
  //       'Apr',
  //       'May',
  //       'Jun',
  //       'Jul',
  //       'Aug',
  //       'Sep',
  //       'Oct',
  //       'Nov',
  //       'Dec'
  //     ]
  //   },
  //   yAxis: {
  //     title: {
  //       text: 'Revenue in $'
  //     }
  //   },
  //   series: [
  //     {
  //       name: "6",
  //       type: "line",
  //       color: '#044342',
  //       data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196, 70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196, 70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196, 70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
  //     },
  //     {
  //       name: '10',
  //       type: 'line',
  //       color: '#7e0505',
  //       data: [10, 5, 16, 8, 4, 2, 1] 
  //     },
  //     {
  //       name: '20',
  //       type: 'line',
  //       color: '#ed9e20',
  //       data: [
  //         17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59
  //       ]
  //     }],
  //   credits: {
  //     enabled: false
  //   }
  // })



 


 
  }




