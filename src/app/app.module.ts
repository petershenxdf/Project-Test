import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { BarComponent } from './bar/bar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import {QuizComponent} from './quiz/quiz.component';

const routes: Routes = [
  {path: 'LineC', component: ChartComponent},
  {path: 'BarC', component: BarComponent},
  {path: 'Table', component: TableComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Quiz', component: QuizComponent},
  {path: '', redirectTo: 'Table', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    BarComponent,
    TableComponent,
    LoginComponent,
    QuizComponent
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
