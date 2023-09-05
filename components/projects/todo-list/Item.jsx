import React, { useState } from "react";

const Item = ({
  item,
  selectedItem,
  onSelectedItem,
  onEdit,
  children,
  toggleCheck,
  checkedItems,
  onDelete,
}) => {
  // const [check, setCheck] = useState(false);
  const [editing, setEditing] = useState(item.name);
  const [showDate, setShowDate] = useState(false);

  const isSelected = item.id === selectedItem?.id;
  const isChecked = checkedItems[item.id] || false;
  //checkedItem[item.id] is either:true or false provided the id exists. else it'd be undefine, which means box hasn't been checked/unchecked before. in this case the fallback "|| false" will turn it to false.

  const updateList = (e) => {
    e.preventDefault();
    onEdit(editing);
  };

  return (
    <div className="flex gap-2 items-center ">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => toggleCheck(item.id)}
      />
      <span
        className={`flex gap-4 items-center justify-center ${
          isChecked && "line-through"
        }`}
      >
        <h3
          className="text-2xl font-semibold text-center mb-0 cursor-pointer"
          onClick={() => {
            onSelectedItem(item);
          }}
        >
          {item.name}
        </h3>
        <form className={`${!isSelected && "hidden"}`} onSubmit={updateList}>
          <input
            value={editing}
            onChange={(e) => setEditing(e.target.value)}
            className={`text-gray-400 bg-[#222] `}
          />
        </form>
        {showDate ? (
          children
        ) : (
          <button
            onClick={() => setShowDate(!showDate)}
            className="text-[12px] px-1 text-gray-400 border-[1px] rounded-full flex items-center justify-center"
          >
            No due Date
          </button>
        )}
      </span>
      {isChecked && (
        <button className="ml-2" onClick={()=>onDelete(item.id)}>
          ❌
        </button>
      )}
    </div>
  );
};

export default Item;
