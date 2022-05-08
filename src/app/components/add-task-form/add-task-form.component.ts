import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Task, tasks } from '../../tasks';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent implements OnInit {

  tasks: Task[] = tasks;
  @Input() task: Task | undefined; 


  // Angular reactive forms, FormBuilder approach - resource: https://angular.io/guide/reactive-forms
  // Can also be done using single FormControl Input value i.e <input id="name" type="text" [formControl]="name"> & export class FormComponent {name = new FormControl('');
  // Can also be done using form group without form builder

  // Angular template-driven forms is another approach to forms - resource: https://angular.io/guide/forms

  addToDoData = this.formBuilder.group({
    id: [''],
    title: ['', Validators.required],
    description: [''],
    reminder: false,
  });

  // Reactive form, just using FormGroup approach - html is same as form builder
  // addToDoData = new FormGroup({
  //   title: new FormControl(''),
  //   description: new FormControl(''),
  //   reminder: new FormControl(false),
  // });


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.addToDoData.value);
    this.tasks.push(this.addToDoData.value);
    this.addToDoData.reset();
    console.log(tasks);
  }


  // Angular template-driven forms solution - see template html for solution
  // Angular template-driven forms is another approach to forms - resource: https://angular.io/guide/forms

  // onSubmit(form: NgForm) {
  //   console.log(form.value.todo);
  // }

}
