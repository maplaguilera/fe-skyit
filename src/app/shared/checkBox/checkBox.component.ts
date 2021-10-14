import { Component, Input, Output,EventEmitter } from '@angular/core';
import {material} from '../../Models/material.models';

@Component({
  selector: 'fe-checkbox',
  templateUrl: './checkBox.component.html',
  styleUrls: [ './checkBox.component.scss' ]
})
export class CheckBoxComponent  {
    isChecked:boolean=false;
    @Input() item:material = new material();
    @Input() labelName:string="";

    @Output() IsChecked:EventEmitter<material> = new EventEmitter<material>();

    onSelected(item:material){
        this.IsChecked.emit(item);
    }
}
