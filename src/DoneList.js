import React from 'react'

export default({
  data,
  handleClick
}) => {

const donelist = data.map((done, index) => {
  console.log(done)
  return(
    <li
      key={index}
      onClick={() => handleClick(done, index)}
    >
      {done.item}
       <span style={{'float': 'right'}}>{done.time}</span>
    </li>
  )
})

return(
  <div>

    {donelist.length > 0 &&
      <h2>
        Done: {donelist.length}
      </h2>
    }

    <ul className="donelist">{donelist}</ul>
  </div>
)}
