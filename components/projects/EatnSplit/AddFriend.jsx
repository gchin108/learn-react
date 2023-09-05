"use client";
import Button from "@/components/Button";
import { useState } from "react";

const AddFriend = ({onAddFriend}) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  };
  return (
    <form className="flex gap-4 flex-col mt-2" onSubmit={handleSubmit}>
      <div className="flex gap-2 items-center justify-between">
        <h3>🧑‍🤝‍🧑 Friend name</h3>
        <input
          className="text-black pl-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex gap-2 items-center  justify-between">
        <h3>🖼️ Image URL</h3>
        <input
          className="text-black pl-2"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <Button color="#ff922b" moreClass="py-1 px-2 text-black self-end">
        Add Friend
      </Button>
    </form>
  );
};
export default AddFriend;
