import React from 'react'
import PropTypes from 'prop-types'
import FA from 'react-fontawesome'

class Todo extends React.Component {
  state = {
    isEditing: false,
  }

  toggleEditing = (e) => {
    this.setState((prevState, props) => ({ isEditing: !prevState.isEditing, text: props.text }));
  }

  render () {
    const { onClick, onRemoveClick, onEditingDone, text, isCompleted } = this.props;
    let isEditing = this.state.isEditing;
    let toggleEditing = this.toggleEditing;
    return (
      <li className={ [isEditing ? 'editing' : '', isCompleted ? 'completed' : ''].join(' ') }>
        <div className='view'>
          <FA
            className={ ['toggle', !isCompleted ? '' : 'checked'].join(' ') }
            name='check'
            onClick={e => onClick()}
          />
          {
            !isEditing ? 
            <label onDoubleClick={toggleEditing}>{text}</label> : 
            <input 
              type="text" 
              className='edit'
              autoFocus 
              value={this.state.text}
              onChange={e => {this.setState({ text: e.target.value })}}
              onFocus={e => { e.target.selectionStart = e.target.value.length }}
              onBlur={e => {
                onEditingDone(this.state.text);
                toggleEditing();
              }}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  onEditingDone(this.state.text);
                  toggleEditing();
                }
              }}
            />
          }
          <button className='destroy' onClick={onRemoveClick}></button>
        </div>




        {/* <span>
          <span onClick={onClick}>{isCompleted ? '[x]' : '[ ]'}</span>
          {!isEditing ? 
            <span 
              onDoubleClick={toggleEditing} 
              style={{
                textDecoration: isCompleted ? 'line-through' : 'none',
                color: isCompleted ? 'gray' : 'black',
              }}>{text}
            </span> : 
            <input 
              id='editing' 
              autoFocus
              type="text"
              value={this.state.text}
              onChange={e => {this.setState({ text: e.target.value })}}
              onFocus={e => { e.target.selectionStart = e.target.value.length }}
              onBlur={e => {
                onEditingDone(this.state.text);
                toggleEditing();
              }}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  onEditingDone(this.state.text);
                  toggleEditing();
                }
              }}
            />
          }
        </span>
        <span onClick={onRemoveClick}>x</span> */}
      </li>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onEditingDone: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
}

export default Todo;