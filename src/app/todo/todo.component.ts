import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {

  itens; 
  inputValue:string = ""

  constructor( 
    private service: TodoService
  ) {}

  ngOnInit(): any {
    this.deleteData = this.deleteData.bind(this)
    this.checkData = this.checkData.bind(this)

    this.service.start().then( db => {
      this.showPosts(db) 
    }) 
  }

  showPosts(db){
      db.findAll().then( itemsList => {
        this.itens = itemsList;
    }); 
  }

  deleteData(event, itemId){
    event.preventDefault()

    this.service.remove(itemId).then( itemsList => {
        alert(`Tarefa ${itemId} deletada`)
        this.itens = itemsList;
    });

  }

  checkData(event, itemId){ 
      event.preventDefault()
      this.service.find(itemId).then( item => {
        (item as any).isChecked = !(item as any).isChecked;
          this.service.update(item).then( itemsList => {
            this.itens = itemsList;
          })
      });

  }

  editData(){
      console.log('editando')
  }

}
