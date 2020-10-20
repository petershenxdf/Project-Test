import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  dataType: string = "";
  sortMethod: string = "Highest";
  dateOfData: Date = new Date("05/21/2020");
  numberOfSelect: number = 5;

  public show: boolean = true;

  ngOnInit () {  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    console.log(this.show);
  }

}
