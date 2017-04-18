import React from 'react'

export default ({
  todo,
  handleClick
}) => {
  return (
    <li>
      <label>
        <input
          key={todo}
          type="checkbox"
          onClick={() => handleClick(todo)}
        />
        {todo}
      </label>
    </li>
  )
}
