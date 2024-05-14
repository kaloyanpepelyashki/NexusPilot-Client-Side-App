import { useContext, useState } from "react";
import { BackButton } from "../UI-Components/Atomic-components/BackButton";
import InputField from "../UI-Components/Atomic-components/InputField";
import SignInButton from "../UI-Components/Atomic-components/SignInButton";
import SignInTextButton from "../UI-Components/Atomic-components/SignInTextButton";
import AuthenticationService from "../ServiceLayer/AuthenticationService";
import { AccessState } from "../ContextProviders/AccessStateProvider";
import { useNavigate } from "react-router-dom";

export const SignInScreen: React.FC = () => {
  //Hooks
  const accessState = useContext(AccessState);
  const navigate = useNavigate();

  //Stateful variables
  const [userEmail, setUserEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);

  const [userPassword, setUserPassword] = useState<string>("");

  //Arrange section
  const authenticationService = new AuthenticationService();

  async function authenticate(email: string, password: string) {
    setEmailError(false);
    //Checks credentials validity
    if (email.length > 0 || password.length > 0) {
      //Checks email validity
      if (!email.includes("@") || email.length < 4) {
        setEmailError(true);
        return;
      }

      const result = await authenticationService.signIn(email, password);
      if (!result) {
        return window.alert("Wrong email or password");
      }
      accessState?.setCurrentUserState(result);
      return navigate("/loading");
    } else {
      window.alert("Please fill out all fields");
    }
  }

  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <div className=" w-3/5 h-2/4 flex flex-col bg-white rounded-xl p-9 bg-secondary">
        <div className="flex flex-row mb-8">
          <BackButton textColor="text-heading" />
        </div>
        {/* Widget Main content holder */}
        <div className="flex flex-col w-full h-3/4">
          <InputField
            heading="Your Email"
            placeHolderText="example@email.com"
            isEmail={true}
            setState={setUserEmail}
            error={emailError}
            errorMessage="Provide a valid email"
          />
          <InputField
            heading="Password"
            isPassword={true}
            setState={setUserPassword}
            placeHolderText="Password longer than 6 digits"
          />
        </div>
        <div className="w-2/5 flex flex-row justify-between items-center mt-3">
          <SignInButton action={() => authenticate(userEmail, userPassword)} />
          <SignInTextButton />
        </div>
      </div>
    </main>
  );
};
