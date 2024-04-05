import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TabComponent } from './tab/tab.component';
import { TabngforComponent } from './tabngfor/tabngfor.component';
import { TodoComponent } from './todo/todo.component';
import { StudentformComponent } from './studentform/studentform.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TabComponent,
    TabngforComponent,
    TodoComponent,
    StudentformComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
