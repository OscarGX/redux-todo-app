import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[Todo] Crear',
    props<{ text: string }>()
);

export const toggle = createAction(
    '[Todo] Toggle',
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[Todo] ToggleAll',
    props<{ completado: boolean }>()
);

export const editar = createAction(
    '[Todo] Editar',
    props<{ id: number, texto: string }>()
);

export const eliminar = createAction(
    '[Todo] Eliminar',
    props<{ id: number }>()
);

export const eliminarCompletados = createAction(
    '[Todo] Eliminar Completados'
);