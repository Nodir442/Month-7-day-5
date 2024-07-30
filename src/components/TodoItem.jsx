import { useDispatch } from "react-redux";
import { toggleComplete, removeTodo } from "../store/todoSlice";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex items-center justify-center gap-5 rounded-xl bg-white px-10 py-5">
      <input
        className="h-5 w-5"
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      />
      <button
        className={`text-2xl font-bold ${completed ? "line-through" : ""}`}
        disabled
      >
        {text}
      </button>
      <button
        className="rounded-lg border-[2px] border-transparent bg-red-400 px-3 py-1 font-semibold text-white transition-all duration-300 hover:border-red-400 hover:bg-white hover:text-red-400"
        onClick={() => dispatch(removeTodo({ id }))}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
