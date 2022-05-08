import { Component, OnInit } from '@angular/core';
import { Task, tasks } from '../../tasks';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = tasks;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  getTasks(): Task[] {
    return this.tasks; 
  }

  deleteTask(task: Task) {
    console.log('deleted task', task.id);
    // this.tasks = this.tasks.filter(task => task.id !== task);
    console.log(tasks);
  }

}
