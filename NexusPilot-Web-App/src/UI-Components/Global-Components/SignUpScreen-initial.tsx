import { AuthenticationActiveBox } from "../Small-Components/AuthenticationActiveBox";
import { SignUpFirstStepContent } from "../Small-Components/AuthSignup-FirstStepContent";

export const SignUpScreenInitial: React.FC = () => {
  return (
    <>
      <AuthenticationActiveBox>
        <SignUpFirstStepContent />
      </AuthenticationActiveBox>
    </>
  );
};
