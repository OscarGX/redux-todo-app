import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'all' | 'active' | 'completed';

export const setFiltro = createAction(
    '[Filtro] Set Filtro',
    props<{ tipoFiltro: filtrosValidos }>()
);