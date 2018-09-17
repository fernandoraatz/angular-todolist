import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './todo/todo.component'
import { FormComponent } from './form/form.component'

const APP_ROUTES: Routes = [
     { 
         path: '', 
         component: TodoComponent 
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