import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { chart } from 'highcharts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  NumberValue:any;
  array_values:any =[];
  store = [] as any;

  test(e:any){
    console.log(e) //Esto viene desde un output del add-component
    console.log('lo de arriba es por que lo hiciste bien!')
  }

  onDelete(){
    this.array_values.splice(-1);
  }

}