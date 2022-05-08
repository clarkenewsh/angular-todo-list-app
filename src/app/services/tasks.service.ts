import { Injectable } from '@angular/core';
import { Task, tasks } from '../tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = tasks;

  constructor() { }

  // addTask

  // deleteTask

  // getTasks
}
