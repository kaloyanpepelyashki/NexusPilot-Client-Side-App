type PriorityProps = {
  priority: string;
  done: boolean;
};

const TaskPriorityTag: React.FC<PriorityProps> = ({ priority, done }) => {
  const tagColor: string =
    priority == "high"
      ? "#AE2E24"
      : priority == "mid"
      ? "#A54800"
      : priority == "low"
      ? "#F5CD47"
      : " ";

  return (
    <div
      className="priority-tag-wrapper flex flex-col items-center justify-center py-1 px-3.5
      rounded-md"
      style={
        done ? { backgroundColor: "#216E4E" } : { backgroundColor: tagColor }
      }
    >
      <p className="priority text-xs text-secondary font-semibold">
        {done ? "done" : priority}
      </p>
    </div>
  );
};
export default TaskPriorityTag;
