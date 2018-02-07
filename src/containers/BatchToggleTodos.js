import React from 'react'
import { connect } from 'react-redux'
import { batchToggleTodos } from '../actions'

let BatchToggleTodos = ({ dispatch }) => {
  return (
    <button onClick={e => {dispatch(batchToggleTodos())}}>Toggle All</button>
  )
}
BatchToggleTodos = connect()(BatchToggleTodos);

export default BatchToggleTodos