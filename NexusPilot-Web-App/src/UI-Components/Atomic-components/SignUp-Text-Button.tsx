import { Link } from "react-router-dom";

export const SignUpTextButton: React.FC = () => {
  return (
    <p className="text-black font-meduim w-1/5">
      Already have an account? <Link to="/auth/signin">Sign In</Link>
    </p>
  );
};
