import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoComponent } from './todo.component';

import { TodoService } from '../todo.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TodoComponent
  ],
  providers: [TodoService],
  declarations: []
})
export class TodoModule { }
