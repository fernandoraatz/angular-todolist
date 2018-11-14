import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list.component';

import { TodoService } from '../../services/todo.service';

@NgModule({
  imports: [ 
    CommonModule
  ],
  exports: [
    ListComponent
  ],
  providers: [TodoService],
  declarations: []
})
export class TodoModule { }
