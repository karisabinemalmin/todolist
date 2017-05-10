import React from 'react'

export default({
  data,
  handleClick
}) => {

const donelist = data.map((done, index) => {
  return(
    <li
      key={index}
    >
      <label htmlFor={done}>
        <input
          id={done}
          name={done}
          value={done}
          key={done}
          type="checkbox"
          checked="true"
          onClick={() => handleClick(done, index)}
        />
        <span></span>
        {done.item}
        <span style={{'float': 'right', 'opacity': '.5'}}>{done.time}</span>
      </label>
    </li>
  )
})

return(
  <div className="wrapper">

    {donelist.length > 0 &&
      <h2>
        Completed: {donelist.length}
      </h2>
    }

    <ul className="donelist">
      {donelist}
    </ul>
  </div>
)}
