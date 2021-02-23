import React from 'react'

// Render an array of strings with a heading (title)
export function StringList(props) {
  function renderItems(items) {
    return (
      <ul>
      {items.map((item, i) => {return (<li key={i} style={{listStyle: "none"}}>{i+1} = {item}</li>)})}
      </ul>
    )
  }
  return (
    <div>
      <h2>{props.title}</h2>

      {renderItems(props.items)}
    </div>
  )
}
