import { string } from '@amcharts/amcharts4/core';
import { Component, OnInit } from '@angular/core';

export class Message {
    public location: string;
    public time: string;
    public name:string;
    public message: string[] = [];
    public new_mssg:string;
}
@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  constructor() { }
  public location: string;
  public time: string;
  public name:string;
  public new_mssg:string;
  model = new Message();
    /* An empty array that is responsible
       to add a division */
       public items = [];

       /* A two-way binding performed which
          pushes text on division */
       public newTask;


  ngOnInit(): void {
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
               this.name=this.model.name;
               this.location = this.model.location;
               this.time = this.model.time;
               this.new_mssg=this.model.new_mssg;
               let new_model = new Message();
               new_model.location = this.location;
               new_model.time = this.time;
               new_model.new_mssg=this.new_mssg;
               new_model.name=this.name;
               let line:string = '';
               for (let i = 0; i < new_model.new_mssg.length; i++){
                   const character = new_model.new_mssg.charAt(i);
                   line = line.concat(character);
                   if( (i+1)%20==0){
                    new_model.message.push(line);
                    line='';
                   }}
                   new_model.message.push(line);
                this.items.push(new_model);
                console.log(new_model.message);
           }
       }
}
