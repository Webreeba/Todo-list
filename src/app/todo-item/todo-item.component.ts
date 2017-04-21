import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from '../shared/todo';
// import {todos} from '../shared/data';



@Component({
  moduleId: module.id,
  selector: 'todo-item',
  templateUrl: `todo-item.component.html`,
  styleUrls: ['todo-item.component.css'],
})
export class TodoItemComponent  { 
	@Input() todo:Todo;

  toggle(){
    this.todo.completed = !this.todo.completed;
  }

  @Output() delete = new EventEmitter();

  onDelete(){
    this.delete.emit(this.todo);
  }

	 }
