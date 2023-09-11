import EatnSplit from "@/components/projects/EatnSplit/App";
import ToDoList from "@/components/projects/todo-list/App";
import ListApp from "@/components/projects/travelList/App";

const TravelToDos = () => {
  return (
    <div className="max-container flex flex-col items-center gap-4">
      {/* <ListApp/> */}
      <EatnSplit/>
      {/* <ToDoList/> */}
    </div>
  );
}

export default TravelToDos