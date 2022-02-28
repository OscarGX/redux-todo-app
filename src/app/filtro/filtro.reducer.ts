import { Action, createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';
 
export const initialState: filtrosValidos = 'all';
 
const _filtroReducer = createReducer<filtrosValidos, Action>(
  initialState,
  on(setFiltro, (state, { tipoFiltro }) => tipoFiltro),
);
 
export function filtroReducer(state: any, action: any) {
  return _filtroReducer(state, action);
}