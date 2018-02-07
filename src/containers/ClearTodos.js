import React from 'react'
import { connect } from 'react-redux'
import { clearTodos } from '../actions'

let ClearTodos = ({ dispatch }) => {
  return (
    <button onClick={e => {dispatch(clearTodos())}}>Clear</button>
  );
}
ClearTodos = connect()(ClearTodos);

export default ClearTodos