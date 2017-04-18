import React from 'react'

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
      <s>{done.item}</s>
    </li>
  )
})

function DoneTitle() {
  const finishedTodos = donelist.length;
  if (finishedTodos > 0)
    return(
      <h2>Done: {finishedTodos}</h2>
    )
  return(
    <div></div>
  )
}

return(
  <div>
    <DoneTitle />
    <ul className="donelist">{donelist}</ul>
  </div>
)}
