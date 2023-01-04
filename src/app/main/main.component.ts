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
  // store:[] = []





  // const collatzTail = (num: number, storage:number[] = store): any => {
  //   //if num is 1 then store 1
  //   if(num === 1) { 
  //       storage.push(1);
  //       return store;

  //   //if num is even then store num / 2
  //   } else if(num % 2 === 0) {
  //       storage.push(num); 
  //       return collatzTail((num / 2), store);
  //     //if num is odd then store num * 3 + 1

  //   } else {
  //       storage.push(num); 
  //       return collatzTail(3 * num + 1, store);
  //   }
  // };


  test(e:any){
    console.log(e) //Esto viene desde un output del add-component
    console.log('lo de arriba es por que lo hiciste bien!')
    if(e === 1){
      this.store.push(1)
      return this.store
    }
    console.log(this.store)
  }

  onDelete(){
    this.array_values.splice(-1);
  }

}