import React from 'react'
import { connect } from 'react-redux'
import { clearCompleted } from '../actions'

let ClearCompleted = ({ dispatch }) => {
  return (
    <button className='clear-completed' onClick={e => {dispatch(clearCompleted())}}>Clear Completed</button>
  )
}
ClearCompleted = connect()(ClearCompleted);

export default ClearCompleted