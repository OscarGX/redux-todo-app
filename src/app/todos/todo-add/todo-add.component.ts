import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { crear } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('Hi', Validators.required);
  }

  ngOnInit(): void {
  }

  agregar(): void {
    if (this.txtInput.invalid) { return };
    this.store.dispatch(crear({ text: this.txtInput.value }));
    this.txtInput.reset();
  }

}
