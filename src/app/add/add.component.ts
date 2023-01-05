import { AnimateTimings } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { numberFormat } from 'highcharts';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Input() NumberValue:any;
  @Input() array_values:any =[];


  @Output() accion:EventEmitter<any> = new EventEmitter<any>;
  

  add(){
    this.accion.emit(this.NumberValue);
    // console.log(this.NumberValue), //Ver el numero seleccionado en consola
    this.array_values.push(this.NumberValue);
    this.NumberValue = '';
    this.array_values;
  }





  

}
