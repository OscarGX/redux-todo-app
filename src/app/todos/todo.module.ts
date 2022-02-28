import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltroTodoPipe } from './pipes/filtro-todo.pipe';



@NgModule({
  declarations: [
    TodoAddComponent,
    TodoFooterComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoPageComponent,
    FiltroTodoPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoPageComponent
  ],
})
export class TodoModule { }
