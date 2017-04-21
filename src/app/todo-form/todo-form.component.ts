import { Component, Output, EventEmitter } from '@angular/core';
import {Todo} from '../shared/todo';
 import {todos} from '../shared/data';



@Component({
  moduleId: module.id,
  selector: 'todo-form',
  templateUrl: `todo-form.component.html`,
  styleUrls: ['todo-form.component.css'],
})
export class TodoFormComponent  { 

		title:string = "";
    @Output() add = new EventEmitter;

    onSubmit(){
			this.add.emit(this.title);
		}

    


	 }
