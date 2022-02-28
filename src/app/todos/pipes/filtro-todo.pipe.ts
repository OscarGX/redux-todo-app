import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroTodoPipe implements PipeTransform {

  transform(todos: Todo[], filtroType: filtrosValidos): Todo[] {
    switch (filtroType) {
      case 'active':
        return todos.filter(todo => !todo.completado);
      case 'completed':
        return todos.filter(todo => todo.completado);
      default:
        return todos;
    }
  }

}
