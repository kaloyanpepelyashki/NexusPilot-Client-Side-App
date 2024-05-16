import { useContext, useState } from "react";
import { BackButton } from "../Atomic-components/BackButton";
import { ContinueButton } from "../Atomic-components/ContinueButton";
import InputField from "../Atomic-components/InputField";
import { SignUpTextButton } from "../Atomic-components/SignUp-Text-Button";
import { SignUpContext } from "../../ContextProviders/SignUpContextProvider";
import { useNavigate } from "react-router-dom";

const SignUpScreenInitial: React.FC = () => {
  /** Hooks */
  //The signUpContext comes from the SignUpContextProvider context component
  const signUpContext = useContext(SignUpContext);
  const navigate = useNavigate();
  //Error states
  const [nickNameError, setNickNameError] = useState<boolean>(false);

  const continueAction = (): void => {
    setNickNameError(false);
    //Error handling
    if (
      signUpContext?.userNickName?.length == 0 ||
      signUpContext?.userNickName == null
    ) {
      setNickNameError(true);
      return window.alert("Please tell us your nickname");
    }
    if (signUpContext?.userNickName?.length < 3) {
      setNickNameError(true);
      return window.alert("The nickname should be at least 3 characters long");
    }

    navigate("/auth/signup/step2");
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
            heading="Name to put down"
            placeHolderText="Your nickname"
            error={nickNameError}
            errorMessage="Provide nickname"
            setState={signUpContext?.setUserNickName}
          />
        </div>
        <div className="w-full flex flex-row justify-between mt-3">
          <SignUpTextButton />
          <ContinueButton heading={"Continue"} action={continueAction} />
        </div>
      </div>
    </>
  );
};

export default SignUpScreenInitial;
