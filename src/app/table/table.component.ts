import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  title = 'Group-5 Project';
  dataType: string = "Death";
  sortMethod: string = "Highest";
  numberOfSelect: number = 1;
  dateOfData: Date = new Date("05/21/2020");
 

  ngOnInit(): void {
  }

  SearchClick(): void {
    console.log(this.dataType + ' ' + this.sortMethod + ' ' + Number(this.numberOfSelect));
  }

}
