import { Pipe, PipeTransform } from '@angular/core';
// import { ListComponent } from '../views/list/list.component';

@Pipe({
  name: 'search' 
})
export class SearchPipe implements PipeTransform {

  transform(itens: any, inputValue: string): any {
    if(!itens) return [];
    if(!inputValue) return itens;

    inputValue = inputValue.toLowerCase(); 
    return itens.filter( item => item.title.toLowerCase().includes(inputValue));
  }

}
