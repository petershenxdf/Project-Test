import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RecordComponent } from './record/record.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { BarComponent } from './bar/bar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { QuizComponent } from './quiz/quiz.component';
import { MustMatchDirective } from './directives/match-value.directive';
<<<<<<< HEAD
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AuthGuard} from './auth.guard';

=======
import {HttpClientModule} from '@angular/common/http';
>>>>>>> master
const routes: Routes = [
  {path: 'lineC', component: ChartComponent, canActivate : [AuthGuard]},
  {path: 'barC', component: BarComponent, canActivate : [AuthGuard]},
  {path: 'table', component: TableComponent, canActivate : [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'quiz', component: QuizComponent, canActivate : [AuthGuard]},
  {path: 'record', component: RecordComponent, canActivate : [AuthGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full', canActivate : [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    BarComponent,
    TableComponent,
    LoginComponent,
    QuizComponent,
    RecordComponent,
    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
=======
    HttpClientModule,
>>>>>>> master
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
