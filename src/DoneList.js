import React from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default({
  data,
  handleClick
}) => {

const donelist = data.map((done, index) => {
  return(
    <li
      key={index}
      onClick={() => handleClick(done, index)}
    >
      <label>
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
      <CSSTransitionGroup
        transitionName="todo"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
      >
        {donelist}
      </CSSTransitionGroup>
    </ul>
  </div>
)}
