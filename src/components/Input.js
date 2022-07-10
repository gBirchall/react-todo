import React, { useState } from "react";

const Input = ({ label, onAddItem }) => {
  const [itemInputText, setitemInputText] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (itemInputText.length) {
      onAddItem(itemInputText);
    }
    setitemInputText("");
  };

  return (
    <div>
      <div>
        <form onSubmit={onFormSubmit}>
          <div>
            <label>{label}</label>
          </div>
          <div>
            <input
              type="text"
              value={itemInputText}
              onChange={(e) => setitemInputText(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Item </button>
        </form>
      </div>
    </div>
  );
};

export default Input;
