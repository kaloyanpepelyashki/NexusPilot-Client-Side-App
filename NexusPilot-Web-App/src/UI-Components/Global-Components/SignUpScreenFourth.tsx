import { useContext, useState } from "react";
import { BackButton } from "../Atomic-components/BackButton";
import { ContinueButton } from "../Atomic-components/ContinueButton";
import { SignUpTextButton } from "../Atomic-components/SignUp-Text-Button";
import { SignUpContext } from "../../ContextProviders/SignUpContextProvider";
import { useNavigate } from "react-router-dom";
import SignUpTextArea from "../Atomic-components/SignUpTextArea";

const SignUpScreenFourth: React.FC = () => {
  /** Hooks */
  //The signUpContext comes from the SignUpContextProvider context component
  const signUpContext = useContext(SignUpContext);
  const navigate = useNavigate();

  //Error states
  const [bioError, setBioError] = useState<boolean>(false);

  const continueAction = (): void => {
    if (signUpContext?.userBio?.length == 0 || signUpContext?.userBio == null) {
      setBioError(true);
      return window.alert("Please provide a bio");
    }
    if (signUpContext?.userBio?.length < 60) {
      setBioError(true);
      return window.alert("Bio must be at least 60 characters long");
    }

    navigate("/auth/signup/step5");
  };

  return (
    <>
      <div className=" w-3/5 h-2/4 flex flex-col bg-white rounded-xl p-9 bg-secondary">
        <div className="flex flex-row mb-8">
          <BackButton textColor="text-heading" />
        </div>
        {/* Widget Main content holder */}
        <div className="flex flex-col w-full h-3/4">
          <SignUpTextArea
            heading="Say something about you"
            placeHolderText="Bio: describe yourself in couple of words"
            error={bioError}
            errorMessage="Provide a valid bio"
            setState={signUpContext?.setUserBio}
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

export default SignUpScreenFourth;
