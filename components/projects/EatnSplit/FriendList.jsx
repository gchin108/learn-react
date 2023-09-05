import Friend from "./Friend";
const FriendList = ({

  friends,
  onSelectedFriend,
  selectedFriend,
}) => {
  return (
    <div className="flex gap-4 flex-col">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelectedFriend={onSelectedFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </div>
  );
};
export default FriendList;
