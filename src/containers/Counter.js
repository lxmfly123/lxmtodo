import React from 'react'
import { connect } from 'react-redux'
// import _Counter from '../components/Counter'

let Counter = props => {
  const { count } = props;
  return (
    <span className='todo-count' >{count} item{count > 1 ? 's' : null} left.</span>
  )
}

const getUncompletedTodosCount = todos => {
  return todos.filter(todo => !todo.isCompleted).length;
}

const mapStateToProps = (state, ownProps) => ({
  count: getUncompletedTodosCount(state.todos)
})

Counter = connect(
  mapStateToProps
)(Counter)


export default Counter