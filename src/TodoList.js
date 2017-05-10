import React from 'react'
import Todo from './Todo'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default ({
  handleClick,
  todos
}) => {
  const list = todos.map((todo, index) =>
    <Todo
      handleClick={() => handleClick(todo, index)}
      key={index}
      todo={todo.item}
    />
  )
  return(
    <div className="wrapper">
      <ul>
        <CSSTransitionGroup
          transitionName="todo"
          transitionEnterTimeout={200}
          transitionActiveTimeout={200}
          transitionLeaveTimeout={2000}
        >
          {list}
        </CSSTransitionGroup>
      </ul>
    </div>
  )
}
