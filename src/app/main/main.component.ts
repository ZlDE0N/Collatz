import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { chart } from 'highcharts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  Chart: any;

  NumberValue:any;
  array_values:any =[];
}