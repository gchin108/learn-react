"use client";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

const ListApp = () => {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems((items) => [...items, newItem]);
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  const handleToggleItem = (id) => {//updating
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      ) //finds the item where its id matches the 'selected' id, creates a new array, spread the current selected item in that array and change the packed variable to its opposite. Finally leave all other items untouched.
    );
  };
  const handleClearList = ()=>{
    const confirmed = window.confirm("Are you sure you want to clear the list?")
    if (confirmed) setItems([])
  }


  return (
    <div className="w-fit">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDelete={handleDelete}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};

export default ListApp;
