import { AnimateTimings } from '@angular/animations';
import { Component, Input, Output } from '@angular/core';
import { numberFormat } from 'highcharts';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Input() NumberValue:any;
  @Input() array_values:any =[];

  constructor(public serviceAgrear:ServiceService){}
  

  add(){
    console.log(this.NumberValue)
    this.array_values.push(this.NumberValue)
    this.NumberValue = '';
    console.log(this.array_values)
  }




  

}
