import { useState } from "react";
import CloseButton from "../Atomic-components/CloseButton";
import { ContinueButton } from "../Atomic-components/ContinueButton";
import InputField from "../Atomic-components/InputField";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import PriorityDropDownMenu from "../Atomic-components/ProrityDropDownMenu";
import TasksService from "../../ServiceLayer/TaskService";
import { useNavigate } from "react-router-dom";

type CreateTaskOverlayProps = {
  setCloseState: React.Dispatch<React.SetStateAction<boolean>>;
  setShouldReload: React.Dispatch<React.SetStateAction<boolean>>;
  projectId: string;
  userId: string;
  jwt: string;
};

const CreateTaskOverlay: React.FC<CreateTaskOverlayProps> = ({
  setCloseState,
  setShouldReload,
  projectId,
  userId,
  jwt,
}) => {
  const navigate = useNavigate();
  const [summary, setSummary] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [priority, setPriority] = useState<string | undefined>();

  const createTaskAction = async (): Promise<void> => {
    console.log(summary);
    console.log(description);
    console.log(startDate);
    console.log(endDate);
    console.log(priority);
    if (!summary || !description || !startDate || !endDate || !priority) {
      return window.alert("Please fill out all fields");
    }
    //Validates jwt and userId
    if (jwt.length < 0 || userId.length < 0) {
      window.alert("Error");
      return navigate("/");
    }
    const startDateString: string = startDate.format("YYYY-MM-DD").toString();
    const endDateString: string = endDate.format("YYYY-MM-DD").toString();

    const tasksService = new TasksService();
    const result = await tasksService.createTask(
      summary,
      description,
      startDateString,
      endDateString,
      priority,
      userId,
      projectId,
      jwt
    );

    if (result) {
      setShouldReload(true);
      setCloseState(true);
      return;
    } else {
      return window.alert("Error creating task. Try again");
    }
  };
  return (
    <div className="create-task-overlay-wrapper w-full h-full absolute inset-0 flex flex-col items-center justify-center ">
      <div className="create-task-overlay-background w-full h-full absolute inset-0 bg-background-2 opacity-30"></div>
      <div className="create-task-form-wrapper w-2/5 h-2/4 flex flex-col items-center bg-white rounded-xl p-9 bg-secondary z-10">
        <div className="reate-task-form-wrapper-top-section w-full flex flex-row  justify-end">
          <CloseButton setCloseState={setCloseState} />
        </div>
        <div className="flex flex-col w-full h-3/4">
          <InputField
            heading="Task summary"
            placeHolderText="Short summary"
            setState={setSummary}
          />
          <InputField
            heading="Description"
            placeHolderText="With a few words describe the task"
            setState={setDescription}
          />
          <div className="w-3/4 flex flex-row justify-between">
            <div className="w-1/2">
              <DatePicker
                label="Start Date"
                defaultValue={dayjs()}
                onChange={(date) => {
                  setStartDate(date);
                }}
              />
            </div>
            <div className="w-1/2 ml-2">
              <DatePicker
                label="End Date"
                defaultValue={dayjs()}
                onChange={(date) => {
                  setEndDate(date);
                }}
              />
            </div>
          </div>
          <div className="mt-3">
            <PriorityDropDownMenu
              priority={priority}
              setPriority={setPriority}
            />
          </div>
        </div>
        <div className="reate-task-form-wrapper-bottom-section w-full flex flex-row items-start justify-end">
          <ContinueButton heading={"Done"} action={createTaskAction} />
        </div>
      </div>
    </div>
  );
};

export default CreateTaskOverlay;
