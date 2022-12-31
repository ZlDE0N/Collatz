import { Component, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent {


 chart = new Chart({
    chart: {
      type: 'line',
      height: 350
    },
    title: {
      text: 'Collatz'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in $'
      }
    },
    series: [
      {
        name: "6",
        type: "line",
        color: '#044342',
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196, 70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196, 70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196, 70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
      },
      {
        name: '10',
        type: 'line',
        color: '#7e0505',
        data: [10, 5, 16, 8, 4, 2, 1] 
      },
      {
        name: '20',
        type: 'line',
        color: '#ed9e20',
        data: [
          17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59
        ]
      },
    ],
    credits: {
      enabled: false
    }
  })



}