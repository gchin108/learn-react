import Image from "next/image";
import Button from "@/components/Button";

const Friend = ({ friend, onSelectedFriend, selectedFriend }) => {
  const isSelected = friend.id === selectedFriend?.id; //crucial logic
  return (
    <div className="flex flex-col gap-4">
      <div className={`flex gap-2 items-center justify-between w-[400px] p-2 ${isSelected && "bg-[#333]"}`}>
        <div className="flex gap-4 items-center ">
          <Image
            src={friend.image}
            width={50}
            height={50}
            objectFit="cover"
            className="rounded-full"
          />
          <div>
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
              <p className="text-sm text-coral-red">
                You owe{friend.name} $ {Math.abs(friend.balance)}
              </p>
            )}
            {friend.balance > 0 && (
              <p className="text-sm text-green-500">
                {friend.name} owes you $ {friend.balance}
              </p>
            )}
            {friend.balance === 0 && (
              <p className="text-sm text-gray-400">
                {friend.name} and you are even
              </p>
            )}
          </div>
        </div>

        <Button
          func={() => onSelectedFriend(friend)}
          color="#ff922b"
          moreClass="py-1 px-2 text-black"
        >
          {isSelected?"Close":"Select"}
        </Button>
      </div>
    </div>
  );
};
export default Friend;
