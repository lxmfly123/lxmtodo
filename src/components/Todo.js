import React from 'react'
import PropTypes from 'prop-types'
// import EditTodo from '../containers/EditTodo'

const Todo = (props) => {
  const { onClick, onRemoveClick, toggleEditing, onEditingDone, text, isCompleted, isEditing } = props;
  return (
    <li
      style={{ display: 'flex',
               flexFlow: 'row wrap',
               alignItems: 'center',
               justifyContent: 'space-between',
            }}
    >
      <span>
        <span onClick={onClick}>{isCompleted ? '[x]' : '[ ]'}</span>
        {!isEditing ? 
          <span 
            onDoubleClick={toggleEditing} 
            style={{
              textDecoration: isCompleted ? 'line-through' : 'none',
              color: isCompleted ? 'gray' : 'default',
            }}>{text}
          </span> : 
          <input 
            id='editing' 
            autoFocus
            type="text"
            value={text}
            onChange={e => {onEditingDone(e.target.value)}}
            onFocus={e => { e.target.selectionStart = e.target.value.length }}
            onBlur={toggleEditing}
            onKeyDown={e => {
              if (e.keyCode === 13) toggleEditing();
            }}
          />
        }
      </span>
      <span onClick={onRemoveClick}>x</span>
    </li>
  );
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
}

export default Todo;