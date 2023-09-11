import Button from "@/components/Button";
import { useState } from "react";
const FormSplit = ({ selectedFriend, onSplitBills }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const friendBill = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBills(whoIsPaying==="user"? (bill - paidByUser): (-paidByUser))
  }
  return (
    <form className="flex flex-col gap-4 bg-[#333] h-fit p-4"onSubmit={handleSubmit} >
      <h3>Split the bill with {selectedFriend.name}</h3>
      <div className="flex gap-2 items-center justify-between">
        <p>💰 Bill Value</p>
        <input
          type="Number"
          className="text-black w-20 text-center"
          value={bill}
          onChange={(e) => {
            setBill(Number(e.target.value));
          }}
        />
      </div>
      <div className="flex gap-2 items-center justify-between">
        <p>🕴️ expense</p>
        <input
          className="text-black w-20 text-center"
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill
                ? paidByUser
                : Number(e.target.value)
            )
          } //if greater then don't change the state
        />
      </div>
      <div className="flex gap-2 items-center justify-between">
        <p>🧑‍🤝‍🧑 {selectedFriend.name}'s expenses</p>
        <input
          name="friend"
          className="text-white bg-[#222] w-20 text-center"
          value={friendBill}
        />
      </div>
      <div className="flex gap-2 items-center justify-between">
        <p>🤑 Who's paying the bill?</p>
        <select
          className="text-black"
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </div>
      <Button
        color="#ff922b"
        moreClass="py-1 px-2 text-black self-end"
        // func={() => onUpdateBalance(selectedFriend.id)}
      >
        Split Bill
      </Button>
    </form>
  );
};
export default FormSplit;
