import InputField from "../Atomic-components/InputField";
import { AuthenticationActiveBox } from "../Small-Components/AuthenticationActiveBox";

export const SignUpScreenInitial: React.FC = () => {
  return (
    <>
      <AuthenticationActiveBox nextStep={}>
        <InputField heading="NickName to put down" />
      </AuthenticationActiveBox>
    </>
  );
};
export default SignUpScreenInitial;
