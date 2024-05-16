import CloseButton from "../Atomic-components/CloseButton";
import { ContinueButton } from "../Atomic-components/ContinueButton";
import InputField from "../Atomic-components/InputField";

type CreateProjectFirstStepProps = {
  setCloseState: React.Dispatch<React.SetStateAction<boolean>>;
  setTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
  setDescription: React.Dispatch<React.SetStateAction<string | undefined>>;
  nextAction: () => void;
};

const CreateProjectFirstStep: React.FC<CreateProjectFirstStepProps> = ({
  setCloseState,
  setTitle,
  setDescription,
  nextAction,
}) => {
  return (
    <div className="create-project-first-step-wrapper w-2/5 h-2/4 flex flex-col items-center bg-white rounded-xl p-9 bg-secondary z-10">
      <div className="create-project-first-step-top-section w-full flex flex-row  justify-end">
        <CloseButton setCloseState={setCloseState} />
      </div>
      <div className="flex flex-col w-full h-3/4">
        <InputField
          heading="Project title"
          placeHolderText="Title"
          setState={setTitle}
        />
        <InputField
          heading="Description"
          placeHolderText="With a few words describe the project"
          setState={setDescription}
        />
      </div>
      <div className="create-project-first-step-bottom-section w-full flex flex-row items-start justify-end">
        <ContinueButton heading={"Next"} action={nextAction} />
      </div>
    </div>
  );
};

export default CreateProjectFirstStep;
