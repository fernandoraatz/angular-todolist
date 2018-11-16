import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app.routes';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageheaderComponent } from './components/pageheader/pageheader.component';
import { SearchComponent } from './components/search/search.component';
import { ButtonComponent } from './components/button/button.component';

import { ListComponent } from './views/list/list.component';
import { FormComponent } from './views/add/add.component';

import { TodoService } from './services/todo.service';
import { SearchPipe } from './pipes/search.pipe'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  declarations: [
    HeaderComponent, 
    SidebarComponent,
    ListComponent,
    FormComponent,
    PageheaderComponent,
    SearchComponent,
    ButtonComponent,
    SearchPipe
  ]
  
})
export class TodolistModule { }
