import { Link } from "react-router-dom";

export const SignUpTextButton: React.FC = () => {
  return (
    <p>
      Already have an account? <Link to="/auth/signin">Sign In</Link>
    </p>
  );
};
