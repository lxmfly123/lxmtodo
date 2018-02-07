import React from 'react'
import PropTypes from 'prop-types'

const Link = (props) => {
  const { onClick, isActive, children } = props;
  return (
    isActive ? 
      <span>{children}</span> : 
      <a href='' onClick={e => {
        e.preventDefault();
        onClick();
      }}>{children}</a>
  );
};

Link.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default Link