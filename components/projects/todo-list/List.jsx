import {useState} from 'react'
import Item from './Item'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const List = ({
  list,
  selectedItem,
  onSelectedItem,
  onEdit,
  onUpdateDate,
  onDelete,
  onSort,
}) => {
  const [checkedItems, setCheckedItems] = useState({}); // Initialize an empty object to keep track of checked items

  // Function to toggle the checked state of an item
  const toggleCheck = (id) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
      //create a new key-value pair where the key is the value of id and the value is the negated boolean of what it was previously.
    }));
    onSort(id)
  };
  let sortedList = list
    .slice()
    .sort((a, b) => Number(a.isDone) - Number(b.isDone));

  return (
    <div className="flex flex-col gap-2">
      {sortedList.map((item, index) => (
        <Item
          key={item.id}
          item={item}
          selectedItem={selectedItem}
          onSelectedItem={onSelectedItem}
          onEdit={onEdit}
          toggleCheck={toggleCheck}
          checkedItems={checkedItems}
          onDelete={onDelete}
        >
          <DatePicker
            selected={item.startDate}
            onChange={(date) => onUpdateDate(date, index)}
            className={`text-gray-400 bg-[#222] text-[12px] w-[75px] px-1 border-[1px] rounded-full ${
              checkedItems[item.id] ? "line-through" : ""
            }`}
            dateFormat="eee MMM d"
          />
        </Item>
      ))}
    </div>
  );
};

export default List