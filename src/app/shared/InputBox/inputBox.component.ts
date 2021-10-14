import {Component, Input, Output,EventEmitter} from '@angular/core';
import { FormControl,FormGroupDirective,NgForm } from '@angular/forms';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'fe-inputBox',
  styleUrls: ['./inputBox.component.css'],
  templateUrl: './inputBox.component.html',
})
export class InputComponent {
Inputvalue:string="";
@Input() labelInput:string="Search By";
@Output() inputOutput:EventEmitter<string> = new EventEmitter<string>();

applyFilter(event:any){
    const element = event.currentTarget as HTMLInputElement
const value = element.value
console.log("value filtered" , value);
    this.inputOutput.emit(value);
}

}

