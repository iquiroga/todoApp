import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.models';
import { borrar, borrarCompletados, crear, editar, toggle, toggleAll } from './todo.actions';
 
export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Salvar al mundo'),
  new Todo('Salvar al mundo'),
  new Todo('Salvar al mundo')
];
 
const _todoReducer = createReducer(
  initialState,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(borrar, (state, {id}) => state.filter(todo => todo.id !== id)),
  on(borrarCompletados, (state) => state.filter(todo => !todo.completado ) ),
  on(toggleAll, (state, {completado}) => state.map(todo => {
    return {
      ...todo,
      completado: completado
    }
  }) ),
  on(toggle, (state, {id}) => {
    return state.map(todo => {

      if(todo.id === id) {
          return {
          ...todo,
          completado: !todo.completado
        }
      } else {
          return todo;
        }
    });
  }),
  on(editar, (state, {id, texto}) => {
    return state.map(todo => {

      if(todo.id === id) {
          return {
          ...todo,
          texto: texto
        }
      } else {
          return todo;
        }
    });
  }),
);
 
export function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action);
}