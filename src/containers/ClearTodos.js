import React from 'react'
import { connect } from 'react-redux'
import { clearTodos } from '../actions'

let ClearTodos = ({ dispatch }) => {
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(clearTodos())
        }}
      >
        <button type="submit">Clear</button>
      </form>
    </div>
  )
}
ClearTodos = connect()(ClearTodos);

export default ClearTodos