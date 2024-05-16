import { useContext, useState } from "react";
import { BackButton } from "../Atomic-components/BackButton";
import { ContinueButton } from "../Atomic-components/ContinueButton";
import { SignUpTextButton } from "../Atomic-components/SignUp-Text-Button";
import { SignUpContext } from "../../ContextProviders/SignUpContextProvider";
import { useNavigate } from "react-router-dom";
import SignUpDropDownMenu from "../Small-Components/SignUpDropDownMenu";

const SignUpScreenSecond: React.FC = () => {
  //Hooks
  //The signUpContext comes from the SignUpContextProvider context component
  const signUpContext = useContext(SignUpContext);
  const [purpose, setPurpose] = useState<string | undefined>("");
  const navigate = useNavigate();

  const continueAction = (): void => {
    switch (purpose) {
      case "work":
        navigate("/auth/signup/step3");
        break;
      case "studyies":
        signUpContext?.setUserRole("Student");
        navigate("/auth/signup/step4");
        break;
      case "personal":
        signUpContext?.setUserRole("Hobbies");
        navigate("/auth/signup/step4");
        break;
      default:
        window.alert("Please select an option");
    }
  };

  return (
    <>
      <div className=" w-3/5 h-2/4 flex flex-col bg-white rounded-xl p-9 bg-secondary">
        <div className="flex flex-row mb-8">
          <BackButton textColor="text-heading" />
        </div>
        {/* Widget Main content holder */}
        <div className="flex flex-col w-full h-3/4">
          <SignUpDropDownMenu setPurpose={setPurpose} />
        </div>
        <div className="w-full flex flex-row justify-between mt-3">
          <SignUpTextButton />
          <ContinueButton heading={"Continue"} action={continueAction} />
        </div>
      </div>
    </>
  );
};
export default SignUpScreenSecond;
