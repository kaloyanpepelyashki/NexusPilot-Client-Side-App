import { useState } from "react";
import InputField from "../Atomic-components/InputField";

export const SignUpFirstStepContent: React.FC = () => {
  const [state, setState] = useState<string>(" ");
  return (
    <div className=" w-11/12 h-full flex flex-col">
      <InputField
        heading="Test heading"
        placeHolderText="No need to write"
        isPassword={false}
        setState={setState}
      />
      <InputField
        heading="Test heading"
        placeHolderText="No need to write"
        isPassword={false}
        setState={setState}
      />
    </div>
  );
};
