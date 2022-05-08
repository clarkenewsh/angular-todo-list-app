import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../tasks';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task | undefined; 
  @Output() deleteTask = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    this.deleteTask.emit(task);
  }

}
