type PriorityProps = {
  priority: string;
};

const TaskPriorityTag: React.FC<PriorityProps> = ({ priority }) => {
  const tagColor: string =
    priority == "high"
      ? "red"
      : priority == "mid"
      ? "orange"
      : priority == "low"
      ? "yellow"
      : " ";

  return (
    <div
      className="priority-tag-wrapper flex flex-col items-center justify-center py-1 px-3.5
      rounded-sm"
      style={{ backgroundColor: tagColor }}
    >
      <p className="priority text-xs font-semibold">High</p>
    </div>
  );
};
export default TaskPriorityTag;
