import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { editar, toggle, eliminar } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('txtEditTodo') txtEditTodo!: ElementRef;
  chkCompletado!: FormControl;
  txtTodo!: FormControl;
  isEditing = false;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtTodo = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(toggle({ id: this.todo.id }));
    });
  }

  editar(): void {
    this.isEditing = true;
    this.txtTodo.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtEditTodo.nativeElement.select();
    }, 1);
  }

  exit(): void {
    this.isEditing = false;
    if (this.txtTodo.invalid) return;
    if (this.txtTodo.value === this.todo.texto) return;
    this.store.dispatch(editar({ id: this.todo.id, texto: this.txtTodo.value }));
  }

  destroy(): void {
    this.store.dispatch(eliminar({ id: this.todo.id }));
  }

}
