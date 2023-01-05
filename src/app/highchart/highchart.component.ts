import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from "highcharts";
import * as HighchartsMore from "highcharts/highcharts-more";
import * as HighchartsExporting from "highcharts/modules/exporting";
import { chart, Series } from 'highcharts';
import { HighchartService } from '../services/highchart.service';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent {

  get chart():any{
    return this.hichartService.chart
  }
    
    
    constructor(private hichartService: HighchartService){}
  }




