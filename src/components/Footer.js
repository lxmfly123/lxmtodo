import React from 'react'
import FilterLink from '../containers/FilterLink'
import Counter from '../containers/Counter'
import { VisibilityFilter } from '../actions'
import ClearCompleted from '../containers/ClearCompleted'

const Footer = (props) => {
  return (
    <div className='footer'>
      <Counter />
      <ul className='filters'>
        <FilterLink filter={VisibilityFilter.SHOW_ALL}>ALL</FilterLink>
        {' | '}
        <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>ACTIVE</FilterLink>
        {' | '}
        <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>COMPLETED</FilterLink>
      </ul>
      <ClearCompleted />
    </div>


    // <p>Show: 
    //   <Counter />
    //   <FilterLink filter={VisibilityFilter.SHOW_ALL}>ALL</FilterLink>
    //   {' | '}
    //   <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>ACTIVE</FilterLink>
    //   {' | '}
    //   <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>COMPLETED</FilterLink>
    // </p>
  );
}

export default Footer;