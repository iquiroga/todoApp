import { ActionReducerMap } from "@ngrx/store";
import { filtroReducer } from "./filtro/filtro.reducer";
import { filtrosValidos } from "./filtro/fltro.actions";
import { Todo } from "./todos/models/todo.models";
import { todoReducer } from "./todos/todo.reducer";

export interface AppState {
  todos: Todo[],
  filtro: filtrosValidos
}


export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer

}