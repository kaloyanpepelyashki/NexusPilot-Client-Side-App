import { BackButton } from "../Atomic-components/BackButton";
import { ContinueButton } from "../Atomic-components/ContinueButton";
import InputField from "../Atomic-components/InputField";
import { SignUpTextButton } from "../Atomic-components/SignUp-Text-Button";

export const SignUpScreenInitial: React.FC = () => {
  return (
    <>
      <div className=" w-3/5 h-2/4 flex flex-col bg-white rounded-xl p-9 bg-secondary">
        <div className="flex flex-row mb-8">
          <BackButton textColor="text-heading" />
        </div>
        {/* Widget Main content holder */}
        <div className="flex flex-col w-full h-3/4">
          <InputField
            heading="Name to put down"
            placeHolderText="Your nickname"
          />
        </div>
        <div className="w-full flex flex-row justify-between mt-3">
          <SignUpTextButton />
          <ContinueButton />
        </div>
      </div>
    </>
  );
};
