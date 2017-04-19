import { Component } from '@angular/core';

const todos = [
	{
		title: "Изучить Джс",
		completed: true
    },
    {
		title: "Написать апликуху",
		completed: false
    },
    {
		title: "Купить мяч",
		completed: false
    },
    {
		title: "Поспать",
		completed: true
    }
];

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  styleUrls: ['app.component.css'],
})
export class AppComponent  { 
		title = "Users-list";
		todos = todos;

		toggle(todo:any){
			todo.completed = !todo.completed;
		}
		delete(todo:any){
			let index = this.todos.indexOf(todo);
			if(index > -1){
				this.todos.splice(index, 1);
			}
		}


	 }
