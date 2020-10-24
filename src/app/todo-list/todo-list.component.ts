import { Component, OnInit } from '@angular/core';

export class Message {
    public location: string;
    public time: string;
    public message: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }
  public location: string;
  public time: string;
  model = new Message();
    /* An empty array that is responsible
       to add a division */
       public items = [];

       /* A two-way binding performed which
          pushes text on division */
       public newTask;


  ngOnInit(): void {
  }


       /* When input is empty, it will
          not create a new division */
       public addToList() {
           if (this.newTask === '') {
           }
           else {
               this.items.push(this.newTask);
               this.newTask = '';
           }
       }

       /* This function takes to input the
          task, that has to be deleted*/
       public deleteTask(index) {
           this.items.splice(index, 1);
       }

       public onSubmit(form): void{
           console.log(form.value);
           if (this.newTask === '') {
           }
           else {
               this.items.push(this.model);
               this.location = this.model.location;
               this.time = this.model.time;
               this.model = new Message();
               this.model.location = this.location;
               this.model.time = this.time;
           }
       }
}
