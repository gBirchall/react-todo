

import React, { useState } from "react";
import Input from "./components/Input";
import ItemList from "./components/ItemList";

const App = () => {
  const [itemsArray, setItemsArray] = useState([]);

  const onAddItem = (inputText) => {
    const updatedItems = itemsArray.concat([
      {
        itemText: inputText,
        completed: false,
        key: Date.now(),
      },
    ]);
    setItemsArray(updatedItems);
  };

  const onDeleteItem = (key) => {
    const removeItem = itemsArray.filter((item) => item.key !== key);

    setItemsArray(removeItem);
  };

  const onCompleteItem = (key) => {
    const completeItems = itemsArray.map((item) => {
      if (item.key === key) {
        item.completed = item.completed ? false : true;
      }
      // console.log(item);
      return item;
    });
    setItemsArray(completeItems);
  };

  return (
    <div className="container jumbotron">
      <Input label="Add item" onAddItem={onAddItem} />
      <ItemList
        list={itemsArray}
        onDeleteItem={onDeleteItem}
        onCompleteItem={onCompleteItem}
      />
    </div>
  );
};

export default App;
