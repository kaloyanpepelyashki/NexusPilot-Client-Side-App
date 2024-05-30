import { Menu, MenuItem } from "@mui/material";
import AssigneeAvatart from "../Atomic-components/AssigneeAvatart";
import TaskPriorityTag from "../Atomic-components/TaskPriorityTag";
import React, { useContext, useState } from "react";
import { AccessState } from "../../ContextProviders/AccessStateProvider";
import TaskService from "../../ServiceLayer/TaskService";
import { MoreHoriz } from "@mui/icons-material";
import TaskExpandedOverlay from "./TaskExpandedOverlay";

type TaskItemProps = {
  id: string;
  summary: string;
  description: string;
  startDate: string;
  endDate: string;
  priority: string;
  done: boolean;
  shouldReload: React.Dispatch<React.SetStateAction<boolean>>;
};

const TaskItemComponent: React.FC<TaskItemProps> = ({
  id,
  summary,
  description,
  startDate,
  endDate,
  priority,
  done,
  shouldReload,
}) => {
  /** Hooks */
  const accessState = useContext(AccessState);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [openOverlay, setOpenOverlay] = useState<boolean>(false);

  //Menu coponent function declarations
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const completeTask = async () => {
    try {
      if (accessState?.currentUserState?.jwt) {
        const tasksService = new TaskService();
        const result = await tasksService.completeTask(
          id,
          accessState.currentUserState.jwt
        );

        if (result) {
          shouldReload(true);
          return window.alert("Task completed");
        }

        return window.alert("Error completing task, try again");
      } else {
        return window.alert("Error completing task, try again");
      }
    } catch (e) {
      return window.alert("Error completing task, try again");
    }
  };

  return (
    <>
      <a>
        <div className="task-item-wrapper w-72 h-28 flex flex-col px-2.5 pt-2.5 pb-1.5 mr-5 bg-secondary rounded-lg">
          <div className="task-item-menu-holder w-full flex flex-row justify-end">
            <a className="hover:cursor-pointer" onClick={handleClick}>
              <MoreHoriz />
            </a>
          </div>
          <div className="task-main-content-section flex flex-row justify-between items-start mb-2">
            <div className="task-title-and-due flex flex-col items-start">
              <h4 className="text-base font-bold text-heading">{summary}</h4>
              <h5 className="text-sm font-medium text-heading">
                Due: {endDate}
              </h5>
            </div>
            <TaskPriorityTag done={done} priority={priority} />
          </div>
          <div className="task-assignees-list flex flex-row">
            <AssigneeAvatart imageUrl="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" />
            <AssigneeAvatart imageUrl="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" />
            <AssigneeAvatart imageUrl="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" />
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => setOpenOverlay(true)}>
              Expand task
            </MenuItem>
            {done ? (
              ""
            ) : (
              <MenuItem onClick={completeTask}>Complete task</MenuItem>
            )}
          </Menu>
        </div>
      </a>
      {openOverlay ? (
        <TaskExpandedOverlay
          summary={summary}
          description={description}
          startDate={startDate}
          endDate={endDate}
          priority={priority}
          done={done}
          setCloseState={setOpenOverlay}
        />
      ) : (
        " "
      )}
    </>
  );
};

export default TaskItemComponent;
