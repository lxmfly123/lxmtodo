import React from 'react'
import BatchToogleTodos from '../containers/BatchToggleTodos'
import AddTodo from '../containers/AddTodo'

const Header = props => {
  return (
    <div className='header'>
      <h1>react todos</h1>
      <AddTodo />
    </div>
  );
}

export default Header