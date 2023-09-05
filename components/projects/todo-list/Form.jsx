
const Form = ({ onAddItem,newItem,
setNewItem }) => {

  return (
    <div>
      <form onSubmit={onAddItem}>
        <input
          autoFocus
          className="text-gray-200 text-4xl bg-[#222] caret-gray-400 text-left w-full py-4 border-none outline-none"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Form;
