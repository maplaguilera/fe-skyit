import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import {  CheckBoxComponent} from './checkBox.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatToolbarModule, MatTabsModule,
                  MatButtonModule, MatInputModule, MatCheckboxModule, MatRadioModule ],
  declarations: [ CheckBoxComponent ],
  exports:[CheckBoxComponent],
  bootstrap:    [ CheckBoxComponent ]
})
export class CheckboxModule { }
