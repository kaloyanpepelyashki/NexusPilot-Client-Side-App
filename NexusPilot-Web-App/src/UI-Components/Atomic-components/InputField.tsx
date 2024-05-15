import React from "react";

type InputFieldType = {
  heading?: string;
  placeHolderText?: string;
  errorMessage?: string;
  isPassword?: boolean;
  isEmail?: boolean;
  error?: boolean;
  setState:
    | React.Dispatch<React.SetStateAction<string | undefined>>
    | undefined;
};

const InputField: React.FC<InputFieldType> = ({
  heading,
  placeHolderText,
  errorMessage,
  isPassword,
  isEmail,
  error,
  setState,
}) => {
  return (
    <div className="input-wrapper w-6/12 h-2/4 flex flex-col items-start">
      {heading ? (
        <h2 className="mb-2 text-xl font-semibold text-heading">{heading}</h2>
      ) : (
        " "
      )}

      <input
        className="w-full h-1/4 bg-white text-black border border-solid border-sky-500 rounded-md bg-secondary drop-shadow-xl text-heading pl-2 pt-3 pb-3"
        type={isPassword ? "password" : isEmail ? "email" : "text"}
        placeholder={placeHolderText ? placeHolderText : " "}
        onChange={setState ? (e) => setState(e.target.value) : undefined}
      />
      {error ? <p className="text-xs text-error ">{errorMessage}</p> : ""}
    </div>
  );
};

export default InputField;
