import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AccessState } from "../ContextProviders/AccessStateProvider";

//Neccessary to extend RouterProps in order to get outlet
interface IProtectedRoute {
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
