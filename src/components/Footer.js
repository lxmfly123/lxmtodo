import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilter } from '../actions'

const Footer = (props) => {
  return (
    <p>Show: 
      <FilterLink filter={VisibilityFilter.SHOW_ALL}>ALL</FilterLink>
      {' | '}
      <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>ACTIVE</FilterLink>
      {' | '}
      <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>COMPLETED</FilterLink>
    </p>
  );
}

export default Footer;