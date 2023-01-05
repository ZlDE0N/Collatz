import { Injectable } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Injectable({
  providedIn: 'root'
})
export class HighchartService {

  chart = new Chart({
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
      name: 'Line test',
      type: 'line',
      data: [1, 2, 3]
    }]
  });


  // chart: Chart = new Chart;

  // ngOnInit() {
  //   this.init();
  // }

  // addPoint() {
  //   if (this.chart) {
  //     this.chart.addPoint(Math.floor(Math.random() * 10));
  //   } else {
  //     alert('init chart, first!');
  //   }
  // }
  // //Para agregar 
  // addSerie(e:any) {
  //   this.chart.addSeries({
  //     name: 'Line',
  //     type: 'line',
  //     data: e},true,true);
  // }


  // removePoint() {
  //   this.chart.removePoint(this.chart.ref.series[0].data.length - 1);
  // }

  // removeSerie() {
  //   this.chart.removeSeries(this.chart.ref.series.length - 1);
  // }

  // init() {
  //   let chart = new Chart({
  //     chart: {
  //       type: 'line',
  //       height: 320
  //     },
  //     title: {
  //       text: 'Collatz conjeture'
  //     },
  //     credits: {
  //       enabled: false
  //     },
  //     series: [{
  //       name: 'Line 1',
  //       type: 'line',
  //       data: [1, 2, 3]
  //     }]
  //   });

  //   chart.addPoint(4);
  //   this.chart = chart;
  //   chart.addPoint(5);
  //   setTimeout(() => {
  //     chart.addPoint(6);
  //   }, 2000);

  //   chart.ref$.subscribe(console.log);
  // }


//   constructor() {
//     console.log('servicio inicializado')
//    }
}
