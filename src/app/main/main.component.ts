import { Component, EventEmitter, Output } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { chart, Series } from 'highcharts';
import * as Highcharts from 'highcharts';
import { HighchartService } from '../services/highchart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  NumberValue:any;
  array_values:any =[];

  collatz(e:number){
    console.log(this.array_values);
    collatzTail(e,store);
    // console.log(store); //Confirmar que la sentencia no se repite
    this.chart.addSeries({
      name: e,
      type: 'line',
      data: store},true,true);
      store = []; //Vaciar el array que contiene los numeros de la conjetura de collatz
  }


  deleteSerie(deleteNumber:number){
    this.array_values.splice(deleteNumber,1);
    this.chart.removeSeries(this.chart.ref.series.length - 1);
  }
  //--------Servicio de highcharts-----//
  get chart():any{
    return this.hichartService.chart;
  }

  removePoint(){
    this.chart.removePoint(this.chart.ref.series[0].data.length - 1);
  }

  
    
    
  constructor(private hichartService: HighchartService){}

}

//Logica para la conjetura de collatz recursiva
let store:[] = [];

const collatzTail = (num: number, storage:number[] = store): Array<number> => {
  //if num is 1 then store 1
  if(num === 1) { 
      storage.push(1);
      return store;

  //if num is even then store num / 2
  } else if(num % 2 === 0) {
      storage.push(num); 
      return collatzTail((num / 2), store);
    //if num is odd then store num * 3 + 1

  } else {
      storage.push(num); 
      return collatzTail(3 * num + 1, store);
  }
};


// console.log(collatzTail(4));
