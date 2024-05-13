type SignInButtonProps = {
  action: () => Promise<void>;
};

const SignInButton: React.FC<SignInButtonProps> = ({ action }) => {
  return (
    <button
      onClick={action}
      className="signin-button w-2/4 rounded-md bg-active-el"
    >
      Sign In
    </button>
  );
};

export default SignInButton;
