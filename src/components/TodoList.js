import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = (props) => {
  const { onTodoClick, onRemoveClick, onEditingDone, todos } = props;
  return (
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      {todos.map(todo => {
        return (
          <Todo 
            key={todo.id} 
            {...todo} 
            onClick={e => {onTodoClick(todo.id)}} 
            onRemoveClick={e => {onRemoveClick(todo.id)}} 
            onEditingDone={text => {onEditingDone(todo.id, text)}}
          />
        )
      })}
    </ul>
  );
};

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onEditingDone: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired
};

export default TodoList;