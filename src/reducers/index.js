import {VisibilityFilter, SET_VISIBILITY_FILTER, TOGGLE_TODO, ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../actions'
import { combineReducers } from 'redux'

const visibilityFilter = (state = VisibilityFilter.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
};

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
    default: 
      return state;
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

export default todoApp;