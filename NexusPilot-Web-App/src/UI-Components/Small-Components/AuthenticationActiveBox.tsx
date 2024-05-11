import { BackButton } from "../Atomic-components/BackButton";
import { ContinueButton } from "../Atomic-components/ContinueButton";
import { SignUpTextButton } from "../Atomic-components/SignUp-Text-Button";

export const AuthenticationActiveBox = ({ children }) => {
  return (
    <div className=" w-3/5 h-2/4 flex flex-col bg-white rounded-xl p-9 bg-secondary">
      <div className="flex flex-row mb-8">
        <BackButton />
      </div>
      {/* Widget Main content holder */}
      <div className="flex flex-col w-full h-3/4">{children}</div>
      <div className="w-full flex flex-row justify-between mt-3">
        <SignUpTextButton />
        <ContinueButton />
      </div>
    </div>
  );
};
