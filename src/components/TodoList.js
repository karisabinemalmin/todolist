import React from 'react'
import Todo from './Todo'

export default ({
  handleClick,
  handleDelete,
  todos
}) => {
  const list = todos.map((todo, index) =>
    <Todo
      handleClick={() => handleClick(todo, index)}
      handleDelete={() => handleDelete(todo, index)}
      key={todo.item}
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
        {list}
      </ul>
    </div>
  )
}
