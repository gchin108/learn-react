
export default function Stats({ items }) {
  if (!items.length)
  return (
    <p className="bg-[#76c7ad] text-center text-[#5a3e2b] font-sans font-bold py-2">
      Start adding some items to your packing list 🚀
    </p>
  );
  const numItems = items.length;
  const packedItems = items.filter(item=>item.packed).length
  //this will only filter packed:true, and !item.packed for otherwise
  const percentage = Math.round(packedItems/numItems*100)


  return (
    <div className="bg-[#76c7ad] text-center text-[#5a3e2b] font-sans font-bold py-2">
      {percentage === 100
        ? "You've got everything ready to go ✈️"
        : `You have ${numItems} on your list. Your list is ${percentage}% packed 💼`}
    </div>
  );
}
