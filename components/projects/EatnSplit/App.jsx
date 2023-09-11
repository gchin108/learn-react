"use client";
import { useState } from "react";
import { initialFriends } from "@/constants";
import FormSplit from "./FormSplit";
import FriendList from "./FriendList";
import AddFriend from "./AddFriend";

const EatnSplit = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const addFriend = (newFriend) => {
    setFriends((currentFriends) => [...currentFriends, newFriend]);
    setShowAddFriend(!showAddFriend);
  };

  const handleSelectedFriend = (friend) => {
    // if (openFriend) setOpenFriend(false)
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    //show menu and close function
    setShowAddFriend(false)
 
  };
  const handleSplitBills = (value)=>{
    setFriends(cur=>cur.map(friend=>friend.id===selectedFriend.id?{...friend, balance:friend.balance + value}:friend))
    //finds friend by id, create a new object containing old data and update the balance
    setSelectedFriend(null)
  }

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="flex flex-col">
        <FriendList
          friends={friends}
          onSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <AddFriend onAddFriend={addFriend} />}
        <button
          className="self-end button my-10"
          onClick={() => setShowAddFriend(!showAddFriend)}
        >
          {showAddFriend ? "Close" : "Add friend"}
        </button>
      </div>

      {selectedFriend && (
        <FormSplit
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          onSplitBills={handleSplitBills}
        />
      )}
    </div>
  );
};

export default EatnSplit;
