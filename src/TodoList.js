import React from 'react'
import Todo from './Todo'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default ({
  handleClick,
  handleDelete,
  todos
}) => {
  const list = todos.map((todo, index) =>
    <Todo
      handleClick={() => handleClick(todo, index)}
      handleDelete={() => handleDelete(todo, index)}
      key={index}
      todo={todo.item}
    />
  )
  return(
    <div className="wrapper">

      {list.length === 0 &&
        <span style={{ 'opacity': '.5', 'textAlign': 'center', 'display': 'block' }}>
          No todos
        </span>
      }

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
