import React from 'react'

export default ({
  todo,
  index,
  handleClick,
  handleDelete
}) => {
  return (
    <li
      key={index}
      >
      <label htmlFor={todo}>
        <input
          id={todo}
          name={todo}
          value={todo}
          type="checkbox"
          onClick={() => handleClick(todo)}
        />
        <span></span>
        {todo}
      </label>
      <span
        className="delete"
        onClick={() => handleDelete()}
      >
        🗑
      </span>
    </li>
  )
}
