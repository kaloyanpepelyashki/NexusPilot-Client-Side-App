import React, { useState } from "react";

type InputFieldType = {
  heading?: string;
  placeHolderText?: string;
  isPassword: boolean;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

const InputField: React.FC<InputFieldType> = ({
  heading,
  placeHolderText,
  isPassword,
  setState,
}) => {
  return (
    <div className="input-wrapper w-6/12 h-2/4 flex flex-col items-start">
      {heading ? (
        <h2 className="mb-2 text-xl text-black font-semibold">{heading}</h2>
      ) : (
        " "
      )}
      <input
        className="w-full h-1/4 bg-white text-black border border-solid border-sky-500 rounded-md"
        type={isPassword ? "password" : "text"}
        placeholder={placeHolderText ? placeHolderText : " "}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};

export default InputField;
