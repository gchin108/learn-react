export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
        <div className="flex items-center gap-2">
      <input
        type="checkbox"
        onChange={() => onToggleItem(item.id)}
        value={item.packed}
      />
      <span
        className={`${
          item.packed ? "line-through" : ""
        } flex gap-2 text-md text-[#ffebb3]`}
      >
        <p>{item.description}</p>
        <p>{item.quantity}</p>
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </div>
  );
}
