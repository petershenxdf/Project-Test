import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Group-5 Project';
  dataType: string = "";
  sortMethod: string = "Highest";
  dateOfData: Date = new Date("05/21/2020");
  numberOfSelect: number = 5;

  public show: boolean = true;

  public buttonName:any = 'Show Date Table';

  ngOnInit () {  }

  // toggle() {
  //   this.show = !this.show;

  //   // CHANGE THE NAME OF THE BUTTON.
  //   if(this.show){
  //     this.buttonName = "Hide Date Table";
  //   } else {
  //     this.buttonName = "Show Date Table";
  //   }
      
  //   console.log(this.show);
  // }

}
