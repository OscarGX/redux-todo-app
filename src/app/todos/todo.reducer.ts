import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, toggle, editar, eliminar, toggleAll, eliminarCompletados } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salv'),
];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { text }) => [...state, new Todo(text)]),
  on(toggle, (state, { id }) => state.map(todo => todo.id === id ? { ...todo, completado: !todo.completado } : todo)),
  on(toggleAll, (state, { completado }) => state.map(todo => { return { ...todo, completado } })),
  on(editar, (state, { id, texto }) => state.map(todo => todo.id === id ? { ...todo, texto } : todo)),
  on(eliminar, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(eliminarCompletados, state => state.filter(todo => !todo.completado)),
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}