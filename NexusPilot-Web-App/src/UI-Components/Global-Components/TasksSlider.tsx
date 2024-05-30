import React from "react";
import TaskItem from "../../Models/TskItem";
import TaskItemComponent from "../Small-Components/TaskItem";
import Add from "@mui/icons-material/Add";

type TasksSliderProps = {
  sliderHeading: string;
  hasCreateAction: boolean;
  tasksList: TaskItem[];
  setOpenOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  setShouldReload: React.Dispatch<React.SetStateAction<boolean>>;
};
const TasksSlider: React.FC<TasksSliderProps> = ({
  sliderHeading,
  hasCreateAction,
  tasksList,
  setOpenOverlay,
  setShouldReload,
}) => {
  return (
    <>
      <div className="active tasks pool w-full h-1/2 flex flex-col items-start pl-10  z-20">
        <div className="active-pool-heading-holder w-full flex flex-row items-center mt-10 mb-4 ">
          <h2 className="text-secondary text-2xl font-extrabold drop-shadow-lg">
            {sliderHeading} Tasks
          </h2>
          {hasCreateAction ? (
            <div
              onClick={() => setOpenOverlay(true)}
              className="ml-5 text-4xl hover:cursor-pointer hover:scale-110 drop-shadow-lg"
            >
              <Add fontSize="inherit" className="text-secondary font-bold" />
            </div>
          ) : (
            " "
          )}
        </div>
        <div className="w-full flex flex-row flex-nowrap overflow-x-scroll">
          {tasksList.map((task) => {
            return (
              <TaskItemComponent
                id={task.id}
                summary={task.summary}
                description={task.description}
                startDate={task.startDate}
                endDate={task.endDate}
                priority={task.pirority}
                done={task.done}
                shouldReload={setShouldReload}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TasksSlider;
