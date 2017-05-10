import React from 'react'

export default ({
  todo,
  handleClick,
  handleDelete
}) => {
  return (
    <li>
      <label htmlFor={todo}>
        <input
          id={todo}
          name={todo}
          value={todo}
          key={todo}
          type="checkbox"
          onClick={() => handleClick(todo)}
        />
        {todo}
      </label>
      <span
        className="delete"
        onClick={() => handleDelete()}
      >
        Delete
      </span>
    </li>
  )
}
