type TextAreaProps = {
  heading?: string;
  placeHolderText?: string;
  errorMessage?: string;
  error?: boolean;
  setState:
    | React.Dispatch<React.SetStateAction<string | undefined>>
    | undefined;
};

const SignUpTextArea: React.FC<TextAreaProps> = ({
  heading,
  placeHolderText,
  errorMessage,
  error,
  setState,
}) => {
  return (
    <div className="input-wrapper w-6/12 h-2/4 flex flex-col items-start">
      <h2 className="mb-2 text-xl font-semibold text-heading">{heading}</h2>
      <textarea
        className="sign-up-text-area resize-none w-full h-2/3 max-height-full bg-white text-black border border-solid border-sky-500 rounded-md bg-secondary drop-shadow-xl text-heading pl-2 pt-3 pb-3"
        placeholder={placeHolderText}
        onChange={setState ? (e) => setState(e.target.value) : undefined}
      />
      {error ? <p className="text-xs text-error ">{errorMessage}</p> : ""}
    </div>
  );
};
export default SignUpTextArea;
