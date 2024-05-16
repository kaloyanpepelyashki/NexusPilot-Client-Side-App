import { useContext, useEffect } from "react";
import AuthenticationService from "../ServiceLayer/AuthenticationService";
import { AccessState } from "../ContextProviders/AccessStateProvider";
import { useNavigate } from "react-router-dom";
import User from "../Models/Auth/User";
import Loader from "../UI-Components/Atomic-components/Loader";

const PostSigninSplashScreen: React.FC = () => {
  //Hooks
  const accessState = useContext(AccessState);
  const navigate = useNavigate();

  const authenticationService: AuthenticationService =
    new AuthenticationService();

  const fetchUserProfile = async () => {
    if (
      accessState?.currentUserState?.jwt &&
      accessState?.currentUserState?.userId
    ) {
      const result: User | undefined =
        await authenticationService.fetchUserProfile(
          accessState.currentUserState.jwt,
          accessState.currentUserState.userId
        );
      if (result) {
        accessState.setUserObject(result);
        accessState.setAuthenticationState(true);
        navigate("/dashboard");
      }
    } else {
      window.alert("Error getting data. Loading failed");
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return <Loader />;
};

export default PostSigninSplashScreen;
