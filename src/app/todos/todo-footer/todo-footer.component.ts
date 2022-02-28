import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { filtrosValidos, setFiltro } from '../../filtro/filtro.actions';
import { eliminarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: filtrosValidos = 'all';
  filtros: filtrosValidos[] = ['all', 'active', 'completed'];
  pendientes = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    });
  }

  filtrar(filtro: filtrosValidos): void {
    this.filtroActual = filtro;
    this.store.dispatch(setFiltro({ tipoFiltro: filtro }));
  }

  deleteCompleted(): void {
    this.store.dispatch(eliminarCompletados());
  }

}
