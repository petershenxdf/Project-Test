import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { QuizComponent } from './quiz/quiz.component';
import {MustMatchDirective} from './directives/match-value.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    QuizComponent,
    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
