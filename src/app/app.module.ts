import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './todo/todo.component';
import { FormComponent } from './form/form.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { SearchComponent } from './search/search.component';
import { ButtonComponent } from './button/button.component';

import { AppRoutingModule } from './app.routes';

import { TodoService } from './services/todo.service';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    SidebarComponent,
    ListComponent,
    FormComponent,
    PageheaderComponent,
    SearchComponent,
    ButtonComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
