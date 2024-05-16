import CloseButton from "../Atomic-components/CloseButton";
import { ContinueButton } from "../Atomic-components/ContinueButton";
import CustomBackButton from "../Atomic-components/CustomBackButton";
import InputField from "../Atomic-components/InputField";

type CreateProjectLastStepProps = {
  setCloseState: React.Dispatch<React.SetStateAction<boolean>>;
  setThumbnailImageUrl: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  setBackgroundImageUrl: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  nextAction: () => void;
};

const CreateProjectLastStep: React.FC<CreateProjectLastStepProps> = ({
  setCloseState,
  setThumbnailImageUrl,
  setBackgroundImageUrl,
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
        <InputField
          heading="Project thumbnail"
          placeHolderText="Just paste in the url of a picture you like"
          setState={setThumbnailImageUrl}
        />
        <InputField
          heading="Background image"
          placeHolderText="Just paste in the url of a picture you like"
          setState={setBackgroundImageUrl}
        />
      </div>
      <div className="create-project-first-step-bottom-section w-full flex flex-row items-start justify-end">
        <ContinueButton heading={"Next"} action={nextAction} />
      </div>
    </div>
  );
};

export default CreateProjectLastStep;
