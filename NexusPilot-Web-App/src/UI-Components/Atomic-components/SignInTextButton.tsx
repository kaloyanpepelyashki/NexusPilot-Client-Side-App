import { Link } from "react-router-dom";

const SignInTextButton = () => {
  return (
    <p className="text-black font-meduim w-1/2 text-heading">
      No account? &nbsp;
      <Link className="text-active-el" to="/auth/signup">
        Sign Up
      </Link>
    </p>
  );
};

export default SignInTextButton;
