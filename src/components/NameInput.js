import React, { useState } from 'react'

export function NameInput(props) {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(props.items);

  function onAddButtonClick() {
    let newItems = Array.from(items);
    newItems.push(item);
    setItems(newItems);

    props.addIt(newItems);
    setItem('');
  }

  function handleChange(event) {
    setItem(event.target.value);
  }
  function onClearItemsClick(event) {
    setItems([]);
    props.addIt([]);
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    // style={{backgroundColor: getRandomColor()}}
  }

  // useEffect(() => {
  //   // document.title = `You clicked ${count} times`;
  // });

  return (
    <div>
      <h2>{props.title}</h2>
      {items}

      <p style={{color: "#aaa"}}>{props.items.join(', ')}</p>

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
