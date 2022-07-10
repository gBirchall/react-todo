import React, { useRef } from "react";
import "./css/main.css";

const ItemList = ({ list, onDeleteItem, onCompleteItem }) => {
  const ref = useRef(null);
  const renderedItems = list.map((listItem) => {
    return (
      <div
        style={{ marginTop: "20px" }}
        className={`item ${listItem.completed === true ? "complete" : ""}`}
        key={listItem.key}
      >
        <label>{listItem.itemText}</label>
        <div className="item-buttons">
          <button
            ref={ref}
            type="submit"
            onClick={() => onCompleteItem(listItem.key)}
          >
            {listItem.completed ? "Uncomplete" : "Complete"}
          </button>
          <button type="submit" onClick={() => onDeleteItem(listItem.key)}>
            Delete
          </button>
        </div>
      </div>
    );
  });

  return <div className="list-items">{renderedItems}</div>;
};

export default ItemList;
