import { BackButton } from "../Atomic-components/BackButton";
import { ContinueButton } from "../Atomic-components/ContinueButton";

export const AuthenticationActiveBox = () => {
  return (
    <div className="flex flex-col bg-white w-3/5">
      <div className="flex flex-row">
        <BackButton />
      </div>
      {/* Widget Main content holder */}
      <div className="flex flex-col"></div>
      <div className="w-full flex flex-row justify-between">
        <ContinueButton />
      </div>
    </div>
  );
};
