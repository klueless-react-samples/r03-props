import React, { useState } from 'react'

export function NameInput(props) {
  const [item, setItem] = useState("");

  function onAddButtonClick() {
    props.addIt(oldItems => {
      console.log(oldItems);

      let newItems = Array.from(oldItems);
      newItems.push(item);
      return newItems;
    });
  }

  function handleChange(event) {
    setItem(event.target.value);
  }
  function onClearItemsClick(event) {
    props.addIt([]);
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div>
      <h2>{props.title}</h2>

      <label>{props.label}</label>
      <input type="text" value={item} onChange={handleChange} />
      <button onClick={onAddButtonClick}>
        Add
      </button>
      <button onClick={onClearItemsClick}>
        Clear
      </button>

    </div>
  )
}
