import {Component, Input, OnChanges, Output, SimpleChanges,ViewChild,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { MatOption } from '@angular/material/core';

import {material} from '../../Models/material.models';
@Component({
  selector: 'fe-select',
  templateUrl: './dropdown.component.html',
  styleUrls:['./dropdown.component.css']
})
export class DropdownComponent implements OnChanges{
    @Input() Directors:string[]=[];
    @Output() SelectedDirectores:EventEmitter<string[]> = new EventEmitter<string[]>();
    CheckBoxDirector :material[]=[];
    searchUserForm: FormGroup;

    @ViewChild('allSelected') private allSelected: MatOption;
    constructor(private fb: FormBuilder){}

    listSelected(){
      let list:string[] =  this.searchUserForm.controls.userType.value;
      this.SelectedDirectores.emit(list);
    }


    SetUpCheckBoxDirector(){
        this.Directors.forEach(x=>{
            this.CheckBoxDirector.push(new material({value:'false',description:x}));
        });
    }

    toggleAllSelection() {
        if (this.allSelected.selected) {
          this.searchUserForm.controls.userType
            .patchValue([...this.CheckBoxDirector.map(item => item.description), 0]);
        } else {
          this.searchUserForm.controls.userType.patchValue([]);
        }
        this.listSelected();
      }

    ngOnChanges(changes:SimpleChanges){
        for (const propName in changes){
            if(propName == "Directors"){
                this.Directors = changes[propName].currentValue;
                this.SetUpCheckBoxDirector();
                this.searchUserForm = this.fb.group({
                    userType: new FormControl('')
                  });
            }
        }
    }
  
}


