import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  NumberValue:number = 0;
  array_values:any =[];
  
  add(){
    console.log(this.NumberValue)
    this.array_values.push(this.NumberValue)
    console.log(this.array_values)
  }

  constructor() {
    console.log('servicio activo')
   }
}
