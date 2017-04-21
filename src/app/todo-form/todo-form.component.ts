import { Component} from '@angular/core';
import {Todo} from '../shared/todo';
 import {todos} from '../shared/data';
 import {TodoService} from '../shared/todo.service';



@Component({
  moduleId: module.id,
  selector: 'todo-form',
  templateUrl: `todo-form.component.html`,
  styleUrls: ['todo-form.component.css'],
})
export class TodoFormComponent  { 

		title:string = "";
    constructor(private todoService:TodoService){

    }

    onSubmit(){
			this.todoService.createTodo(this.title);
		}

    


	 }
