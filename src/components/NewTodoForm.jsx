const NewTodoForm = ({ value, updateText, handleAction }) => {
  return (
    <label className="flex justify-center gap-4">
      <input
        className="rounded-lg border-[2px] border-black p-2"
        placeholer="new todo"
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button
        className="rounded-lg border-[2px] border-transparent bg-green-400 px-5 py-3 font-semibold text-white transition-all duration-300 hover:border-green-400 hover:bg-white hover:text-green-400"
        onClick={handleAction}
      >
        Add todo
      </button>
    </label>
  );
};

export default NewTodoForm;
