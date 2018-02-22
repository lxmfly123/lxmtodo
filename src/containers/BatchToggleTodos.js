import React from 'react'
import FA from 'react-fontawesome'
import { connect } from 'react-redux'
import { batchToggleTodos } from '../actions'

let BatchToggleTodos = props => {
  const { disabled, onClick } = props;
  return (
      <FA 
        id='batch-toggle' 
        className={ !disabled ? 'disabled' : undefined }
        name='check'
        size='2x'
        onClick={e => onClick()}
      />
  )
}

const mapStateToProps = (state, ownProps) => ({
  disabled: state.todos.filter(todo => !todo.isCompleted).length === 0,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(batchToggleTodos()),
});

BatchToggleTodos = connect(mapStateToProps, mapDispatchToProps)(BatchToggleTodos);

export default BatchToggleTodos