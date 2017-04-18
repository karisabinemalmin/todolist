import React from 'react'

import Todo from './Todo'

export default ({
  handleClick,
  todos
}) => {
  const list = todos.map((todo, index) =>
    <Todo
      todo={todo.item}
      key={index}
      handleClick={() => handleClick(todo, index)}
    />
  )
  return(
    <ul>{list}</ul>
  )
}
