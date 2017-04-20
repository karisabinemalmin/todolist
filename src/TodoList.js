import React from 'react'

import Todo from './Todo'

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
    <ul>{list}</ul>
  )
}
