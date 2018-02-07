import { connect } from 'react-redux'
import { VisibilityFilter, toggleTodo, removeTodo, toogleEditing, updateTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilter.SHOW_ACTIVE:
      return todos.filter(todo => !todo.isCompleted);
    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter(todo => todo.isCompleted);
    case VisibilityFilter.SHOW_ALL:
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    },
    toggleEditing: id => {
      dispatch(toogleEditing(id))
    },
    onEditingDone: (id, text) => {
      dispatch(updateTodo(id, text))
    },
    onRemoveClick: id => {
      dispatch(removeTodo(id))
    },
  };
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;