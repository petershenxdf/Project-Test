import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { BarComponent } from './bar/bar.component';
// import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import {TodoListComponent} from './todo-list/todo-list.component';

const routes: Routes = [
  {path: 'LineC', component: ChartComponent},
  {path: 'BarC', component: BarComponent},
  {path: 'Table', component: TableComponent},
  {path: '', redirectTo: 'Table', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    BarComponent,
    TableComponent,
    TodoListComponent
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
