import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FE_Main} from '../app/Main/main.component';
const routes: Routes = [
{path:'MoviesApp',component:FE_Main},
{path:'',redirectTo:'/MoviesApp',pathMatch:'full'},
{path:'**',redirectTo:'/MoviesApp',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  entryComponents:[FE_Main],
  exports: [RouterModule]
})
export class AppRoutingModule { }
