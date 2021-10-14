import { NgModule } from "@angular/core";
import { service } from "../service/fe-main.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {FE_Main} from './main.component';
import {MaterialTableModule} from '../shared/Mat-Table/mat-table.module';
import {CheckboxModule} from '../shared/checkBox/checkBox.module';
@NgModule({
    imports:[CommonModule,FormsModule,MaterialTableModule,CheckboxModule],
    declarations:[FE_Main],
    exports:[FE_Main],
    providers:[service]
})
export class FE_main_module{}