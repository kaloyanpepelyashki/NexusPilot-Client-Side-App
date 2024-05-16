import { Outlet } from "react-router-dom";

export const SignUpScreen: React.FC = () => {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      {/* //<Link to="signup-second">Link</Link> */}
      <Outlet />
    </main>
  );
};
