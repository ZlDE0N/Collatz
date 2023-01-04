import { Component, EventEmitter, Output } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  NumberValue:any;
  array_values:any =[];

  collatz(e:number){
    collatzTail(e,store);
    console.log(store);
    store = [];
    console.log(store) //Confirmar en consola que el array store esta vacio
  }


  onDelete(){
    this.array_values.splice(-1);
  }

}

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
