import * as types from "./types";

export const addTodo = (text:string) => ({ type: types.ADD_TODO, text });
export const deleteTodo = (id: string) => ({ type: types.DELETE_TODO, id });
export const editTodo = (id:string, text:string) => ({ type: types.EDIT_TODO, id, text });
export const toggleTodo = (id:string, completed:boolean) => ({
  type: types.TOGGLE_TODO,
  id,
  completed,
});
export const completeAll = () => ({ type: types.COMPLETE_ALL });
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED });
