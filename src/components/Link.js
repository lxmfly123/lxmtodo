import React from 'react'
import PropTypes from 'prop-types'

const Link = (props) => {
  const { onClick, isActive, children } = props;
  return (
    <li>
      <a
        href='' 
        onClick={e => {
          e.preventDefault();
          onClick();
        }}
        className={ isActive ? 'selected' : null}
      >{children}</a>
    </li>
  );
};

Link.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default Link