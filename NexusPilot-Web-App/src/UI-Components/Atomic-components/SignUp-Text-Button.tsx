import { Link } from "react-router-dom";

export const SignUpTextButton: React.FC = () => {
  return (
    <p className="text-black font-meduim w-1/5 text-heading">
      Already have an account?
      <Link className="text-active-el" to="/auth/signin">
        Sign In
      </Link>
    </p>
  );
};
