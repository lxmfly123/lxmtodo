import React from 'react'
import BatchToogleTodos from '../containers/BatchToggleTodos'
import VisibleTodoList from '../containers/VisibleTodoList'

const Main = props => {
  return (
    <div className='main'>
     <BatchToogleTodos />
     <VisibleTodoList />
    </div>
  );
}

export default Main