import CloseButton from "../Atomic-components/CloseButton";
import TaskPriorityTag from "../Atomic-components/TaskPriorityTag";
import FormatAlignLeft from "@mui/icons-material/FormatAlignLeft";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";

type TaskExpandedOverlayProps = {
  summary: string;
  description: string;
  startDate: string;
  endDate: string;
  priority: string;
  done: boolean;
  setCloseState: React.Dispatch<React.SetStateAction<boolean>>;
};

const TaskExpandedOverlay: React.FC<TaskExpandedOverlayProps> = ({
  summary,
  description,
  startDate,
  priority,
  endDate,
  done,
  setCloseState,
}) => {
  return (
    <div className="expanded-task-overlay-wrapper w-full h-full absolute inset-0 flex flex-col items-center justify-center z-40 ">
      <div className="expanded-task-overlay-background w-full h-full absolute inset-0 bg-background-2 opacity-30 z-40"></div>
      <div className="create-task-form-wrapper w-2/5 h-3/4 flex flex-col items-center bg-white rounded-xl p-9 bg-secondary z-50">
        <div className="reate-task-form-wrapper-top-section w-full flex flex-row  justify-end">
          <CloseButton setCloseState={setCloseState} />
        </div>
        <div className="w-full h-3/4 flex flex-col items-start">
          <div className="w-full h-1/6 flex flex-row justify-between mt-5">
            <h2 className="text-heading text-2xl font-bold mb-10">
              <ViewKanbanIcon /> {summary}
            </h2>
            <div className="h-3/4">
              <TaskPriorityTag priority={priority} done={done} />
            </div>
          </div>
          <div className="w-2/3 border border-heading self-center mb-9"></div>
          <div className="description-holder flex flex-col items-start">
            <h3 className="text-heading text-xl font-bold mb-1">
              <FormatAlignLeft /> Description
            </h3>
            <p className="text-heading text-md ">{description}</p>
          </div>

          <div className="task-expanded-dates-holder w-8/12 flex flex-row justify-between mt-20">
            <div className="task-expanded-date flex flex-col items-start">
              <h3 className="text-heading text-sm font-medium mb-2">
                <DateRangeIcon /> Start Date
              </h3>
              <p className="text-heading text-md font-bold">{startDate}</p>
            </div>
            <div className="task-expanded-date flex flex-col items-start">
              <h3 className="text-heading text-sm font-medium mb-2">
                <DateRangeIcon /> End Date
              </h3>
              <p className="text-heading text-md font-bold">{endDate}</p>
            </div>
          </div>
          <h2 className="text-heading text-xl font-bold mb-1 mt-10">
            Assignees
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TaskExpandedOverlay;
