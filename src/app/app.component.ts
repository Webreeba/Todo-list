import { Component } from '@angular/core';


class Todo { 
    constructor(public title:string,
								public completed:boolean=false){}
 }


const todos:Todo[] = [
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
		title:string = "Users-list";
		todos:Todo[] = todos;
		newTodoTitle:string = "";


    create(){

			let todo = new Todo(this.newTodoTitle);
			this.todos.push(todo);
			this.newTodoTitle="";
		}

    
		toggle(todo:Todo){
			todo.completed = !todo.completed;
		}
		delete(todo:Todo){
			let index = this.todos.indexOf(todo);
			if(index > -1){
				this.todos.splice(index, 1);
			}
		}


	 }
