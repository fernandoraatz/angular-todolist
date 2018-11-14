import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './todolist/views/list/list.component'
import { FormComponent } from './todolist/views/add/add.component'

const APP_ROUTES: Routes = [
     { 
         path: '', 
         component: ListComponent 
     }, 
     {  
         path: 'add', 
         component: FormComponent 
     },
     { 
         path: 'add/:id', 
         component: FormComponent 
     }
 ];
 
 @NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
 })
 export class AppRoutingModule{}