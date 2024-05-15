import { useContext, useState } from "react";
import { BackButton } from "../Atomic-components/BackButton";
import { ContinueButton } from "../Atomic-components/ContinueButton";
import InputField from "../Atomic-components/InputField";
import { SignUpTextButton } from "../Atomic-components/SignUp-Text-Button";
import { SignUpContext } from "../../ContextProviders/SignUpContextProvider";
import { useNavigate } from "react-router-dom";

const SignUpScreenThird: React.FC = () => {
  //Hooks
  //The signUpContext comes from the SignUpContextProvider context component
  const signUpContext = useContext(SignUpContext);
  const navigate = useNavigate();
  const [roleError, setRoleError] = useState<boolean>(false);

  const continueAction = (): void => {
    if (
      signUpContext?.userRole?.length == 0 ||
      signUpContext?.userRole == null
    ) {
      setRoleError(true);
      return window.alert("Please tell us your role");
    }
    if (signUpContext?.userRole?.length < 3) {
      setRoleError(true);
      return window.alert("The role should be at least 3 characters long");
    }

    navigate("/auth/signup/step4");
  };

  return (
    <>
      <div className=" w-3/5 h-2/4 flex flex-col bg-white rounded-xl p-9 bg-secondary">
        <div className="flex flex-row mb-8">
          <BackButton textColor="text-heading" />
        </div>
        {/* Widget Main content holder */}
        <div className="flex flex-col w-full h-3/4">
          <InputField
            heading="Your role"
            placeHolderText="ex: Developer, Manager... etc."
            error={roleError}
            errorMessage="Provide a valid role"
            setState={signUpContext?.setUserRole}
          />
        </div>
        <div className="w-full flex flex-row justify-between mt-3">
          <SignUpTextButton />
          <ContinueButton action={continueAction} />
        </div>
      </div>
    </>
  );
};

export default SignUpScreenThird;
