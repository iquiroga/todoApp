import { Action, createReducer, on } from "@ngrx/store";
import { setFilter, filtrosValidos } from "./fltro.actions";

export const initialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer<filtrosValidos, Action>(initialState,
  on(setFilter, (state, {filtro}) => filtro)
);

export function filtroReducer(state: any, action:Action) {
  return _filtroReducer(state, action);
}