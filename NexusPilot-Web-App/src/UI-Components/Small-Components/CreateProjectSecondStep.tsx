import { DatePicker } from "@mui/x-date-pickers";
import CloseButton from "../Atomic-components/CloseButton";
import { ContinueButton } from "../Atomic-components/ContinueButton";
import CustomBackButton from "../Atomic-components/CustomBackButton";
import dayjs, { Dayjs } from "dayjs";

type CreateProjectSecondStepProps = {
  setCloseState: React.Dispatch<React.SetStateAction<boolean>>;
  setStartDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  setEndDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  nextAction: () => void;
};

const CreateProjectSecondStep: React.FC<CreateProjectSecondStepProps> = ({
  setCloseState,
  setStartDate,
  setEndDate,
  nextAction,
  setCurrentStep,
}) => {
  const backAction = () => {
    setCurrentStep(1);
  };

  return (
    <div className="create-project-first-step-wrapper w-2/5 h-2/4 flex flex-col items-center bg-white rounded-xl p-9 bg-secondary z-10">
      <div className="create-project-first-step-top-section w-full flex flex-row justify-between">
        <CustomBackButton action={backAction} />
        <CloseButton setCloseState={setCloseState} />
      </div>
      <div className="flex flex-col justify-between w-full h-3/4 mt-5 py-10">
        <DatePicker
          label="Start Date"
          defaultValue={dayjs()}
          onChange={(date) => {
            setStartDate(date);
          }}
        />
        <DatePicker
          label="End Date"
          defaultValue={dayjs()}
          onChange={(date) => setEndDate(date)}
        />
      </div>
      <div className="create-project-first-step-bottom-section w-full flex flex-row items-start justify-end">
        <ContinueButton heading={"Next"} action={nextAction} />
      </div>
    </div>
  );
};

export default CreateProjectSecondStep;
