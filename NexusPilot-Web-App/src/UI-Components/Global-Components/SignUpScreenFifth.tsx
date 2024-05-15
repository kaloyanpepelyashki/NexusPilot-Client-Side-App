import { useContext, useState } from "react";
import { BackButton } from "../Atomic-components/BackButton";
import { ContinueButton } from "../Atomic-components/ContinueButton";
import InputField from "../Atomic-components/InputField";
import { SignUpTextButton } from "../Atomic-components/SignUp-Text-Button";
import { SignUpContext } from "../../ContextProviders/SignUpContextProvider";
import { useNavigate } from "react-router-dom";

const SignUpScreenFifth: React.FC = () => {
  //Hooks
  //The signUpContext comes from the SignUpContextProvider context component
  const signUpContext = useContext(SignUpContext);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const continueAction = (): void => {
    console.log(signUpContext?.userEmail);
    setEmailError(false);
    if (
      signUpContext?.userEmail == null ||
      signUpContext?.userEmail?.length < 0 ||
      !signUpContext?.userEmail?.includes("@")
    ) {
      setEmailError(true);
      return window.alert("Please provide a valid email");
    }
    if (
      signUpContext?.userPassword == null ||
      signUpContext?.userPassword?.length < 6
    ) {
      setPasswordError(true);
      return window.alert("The password should be at least 6 digits long");
    }

    navigate("/auth/signup/loading");
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
            heading="Your Email"
            placeHolderText="example@email.com"
            error={emailError}
            errorMessage="Please provide a valid email"
            setState={signUpContext?.setUserEmail}
          />
          <InputField
            heading="Set a password"
            placeHolderText="Password must be at least 6 digits long"
            error={passwordError}
            errorMessage="Set a password"
            setState={signUpContext?.setUserPassword}
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

export default SignUpScreenFifth;
