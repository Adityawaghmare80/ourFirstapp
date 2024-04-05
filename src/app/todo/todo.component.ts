import { Component, OnInit } from '@angular/core';
import { Itodo } from '../modules/interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {


  todoArr: Array<Itodo> = [
    {
      todoitem: 'JavaScript'
    }
  ];
  constructor() {

  }
  ngOnInit(): void {
  }

  onTodoAdd(todo: HTMLInputElement) {
    let obj = {
      todoitem: todo.value
    }
    this.todoArr.push(obj);
    todo.value = ''
  }
}
