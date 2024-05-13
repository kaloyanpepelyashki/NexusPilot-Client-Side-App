import { useContext } from "react";
import { Navigate, Outlet, Route, RouterProps } from "react-router-dom";
import { AccessState } from "../ContextProviders/AccessStateProvider";

//Neccessary to extend RouterProps in order to get outlet
interface IProtectedRoute extends RouterProps {
  children: JSX.Element;
  fallBackPath: string;
}

/**
 *
 * This component protects routes from un-authenticated session
 * @returns
 */
const ProtectedRoute: React.FC<IProtectedRoute> = ({
  children,
  fallBackPath,
}) => {
  const accessState = useContext(AccessState);

  if (accessState?.authenticationState) {
    return children;
  }

  return <Navigate to={fallBackPath} replace />;
};

export default ProtectedRoute;
