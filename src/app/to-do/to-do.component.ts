import { Component } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  todos: ToDo[] = [
    {
      task: "Get this lab done!",
      completed: false
    },
    {
      task: "Turn it in!",
      completed: false
    },
  ];

  newToDo: ToDo = {
    task: "",
    completed: false
  };

  addToDo(){
    let result: ToDo = {
      task: this.newToDo.task,
      completed: this.newToDo.completed
    };
    this.todos.push(result);
  }

  completeToDo(index: number){
    this.todos[index].completed = true;
  }
}
