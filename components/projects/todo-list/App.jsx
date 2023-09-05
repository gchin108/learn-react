"use client";
import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import List from "./List";

const ToDoList = () => {
  const [list, setList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [newItem, setNewItem] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    if (!newItem) return;
    const id = crypto.randomUUID();
    const item = {
      id,
      name: newItem,
      startDate: new Date(),
      isDone:false,
    };
    setList((cur) => [...cur, item]);
    setNewItem("");
  };

  const handleDateChange = (date, index) => {
    const updatedList = [...list];
    updatedList[index].startDate = date;
    setList(updatedList);
  };

  const handleSelectedItem = (item) => {
    setSelectedItem((cur) => (cur?.id === item.id ? null : item));

  };

  const handleEdit = (editedItem) => {
    setList((cur) =>
      cur.map((item) =>
        item.id === selectedItem.id ? { ...item, name: editedItem } : item
      )
    );
    setSelectedItem(null);
  };

  const handleDelete = (itemId)=>{
    setList(cur=>cur.filter(item=> item.id!==itemId));
  }
  const sortItem = (id)=>{
    setList(cur=>cur.map(item=>item.id===id?{...item, isDone:!item.isDone}:item))
  }
  return (
    <div className="w-full">
      <Header />
      <Form onAddItem={addItem} newItem={newItem} setNewItem={setNewItem} />
      <List
        list={list}
        selectedItem={selectedItem}
        onSelectedItem={handleSelectedItem}
        onEdit={handleEdit}
        onUpdateDate={handleDateChange}
        onDelete={handleDelete}
        onSort={sortItem}
      />
    </div>
  );
};

export default ToDoList;
