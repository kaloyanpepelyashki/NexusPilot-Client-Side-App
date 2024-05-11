import AssigneeAvatart from "../Atomic-components/AssigneeAvatart";
import TaskPriorityTag from "../Atomic-components/TaskPriorityTag";

const TaskItem: React.FC = () => {
  return (
    <div className="task-item-wrapper h-20 flex flex-col px-2.5 pt-2.5 pb-1.5 bg-secondary">
      <div className="task-main-content-section flex flex-row justify-between items-start">
        <div className="task-title-and-due flex flex-col items-start">
          <h4 className="text-base font-medium text-heading">Task Item</h4>
          <h5 className="text-sm font-medium text-heading">Due: 18/06</h5>
        </div>
        <TaskPriorityTag priority="high" />
      </div>
      <div className="task-assignees-list flex flex-row">
        <AssigneeAvatart imageUrl="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" />
        <AssigneeAvatart imageUrl="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" />
        <AssigneeAvatart imageUrl="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" />
      </div>
    </div>
  );
};

export default TaskItem;
