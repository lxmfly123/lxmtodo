import {
  VisibilityFilter, 
  SET_VISIBILITY_FILTER, 
  TOGGLE_TODO, 
  ADD_TODO, 
  REMOVE_TODO, 
  UPDATE_TODO, 
  CLEAR_TODOS,
  CLEAR_COMPLETED, 
  BATCH_TOGGLE_TODOS,
} from '../actions'
import { combineReducers } from 'redux'

const visibilityFilter = (state = VisibilityFilter.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
};

const batchToogleTodos = todos => {
  const uncompletedTodosExist = todos.filter(todo => !todo.isCompleted).length;
  return todos.map(todo => uncompletedTodosExist && todo.isCompleted ? todo : { ...todo, isCompleted: !todo.isCompleted });
}

const todos = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      return state.map(todo => {
        return todo.id === action.id ? { ...todo, isCompleted: !todo.isCompleted } : todo;
      })
    case ADD_TODO:
      return [...state, { id: action.id, text: action.text, isCompleted: action.isCompleted }];
    case REMOVE_TODO: 
      return state.filter(todo => todo.id !== action.id)
    case UPDATE_TODO: 
      return state.map(todo => {
        return todo.id === action.id ? { ...todo, text: action.text } : todo;
      })
    case CLEAR_TODOS: 
      return [];
    case CLEAR_COMPLETED: 
      return state.filter(todo => !todo.isCompleted);
    case BATCH_TOGGLE_TODOS: 
      return batchToogleTodos(state)
    default: 
      return state;
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

export default todoApp;