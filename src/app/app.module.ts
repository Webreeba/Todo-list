import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AppComponent }  from './app.component';
import { TodoService }  from './shared/todo.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,TodoFormComponent,TodoListComponent, TodoItemComponent],
  bootstrap:    [ AppComponent ],
  providers: [TodoService]
})
export class AppModule { }
