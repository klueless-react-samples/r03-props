import React, { useState } from 'react'

export function Home() {
  const [value, setValue] = useState("");
  const [label, setLabel] = useState("");

  function onAddButtonClick(message) {
    setLabel(`${label}${label == '' ? '' : ', '}${value}`);
    setValue('');
  }

  function handleChange(event) {
    setValue(event.target.value);
  }
  function onClearLabelClick(event) {
    setLabel('');
  }

  return (
    <div className="Home">

      <h2>{label}</h2>

      <input type="text" value={value} onChange={handleChange} />
      
      <button onClick={onAddButtonClick}>
        Add
      </button>
      <button onClick={onClearLabelClick}>
        Clear
      </button>

    </div>
  );
}

