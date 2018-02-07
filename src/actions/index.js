// private variable
let nextId = 0;

// public const
export const VisibilityFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
};

// action types
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// action creators
export const addTodo = (text, isCompleted = false) => {
  return {
    type: ADD_TODO,
    text,
    id: nextId++,
    isCompleted,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id,
  };
};

export const updateTodo = (id, text) => {
  return {
    type: UPDATE_TODO,
    id,
    text,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

export const toogleEditing = id => {
  return {
    type: TOGGLE_EDITING,
    id,
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
}