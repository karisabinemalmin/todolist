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
      <label htmlFor={done.item}>
        <input
          id={done.item}
          name={done.item}
          value={done.item}
          key={done.item}
          type="checkbox"
          checked="true"
          onChange={() => handleClick(done, index)}
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
