import {Component,Input, OnChanges, Output, SimpleChanges,EventEmitter} from '@angular/core';
import {material} from '../../Models/material.models';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'fe-standardSelect',
  templateUrl: './dropdownStandard.component.html',
  styleUrls:['./dropdownStandard.component.css']
})
export class SelectStandardComponent  implements OnChanges{
@Input() Certifications:string[]=[];
@Input() label:string="";
@Output() ItemSelected:EventEmitter<string> = new EventEmitter<string>();
CheckBoxCertifications:material[]= [];


GetItem(item:string){
    console.log("item ",item);
this.ItemSelected.emit(item);
}

  SetUpCheckBoxCertifications(){
      this.CheckBoxCertifications=[];
    this.Certifications.forEach(x=>{
        this.CheckBoxCertifications.push(new material({value:'false',description:x}));
    });
    console.log("this.CheckBoxCertifications", this.CheckBoxCertifications);
}

ngOnChanges(changes:SimpleChanges){
    for(const propName in changes){
        if(propName=="Certifications"){
            this.Certifications = changes[propName].currentValue;
            console.log("Distinct Certifications ",this.Certifications);
            this.SetUpCheckBoxCertifications()
        }
    }
}
}

