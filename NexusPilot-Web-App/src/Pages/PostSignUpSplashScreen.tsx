import { useContext, useEffect, useState } from "react";
import AuthenticationService from "../ServiceLayer/AuthenticationService";
import { SignUpContext } from "../ContextProviders/SignUpContextProvider";
import { Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PostSignUpSplashScreen: React.FC = () => {
  //Hooks
  //The signUpContext comes from the SignUpContextProvider context component
  const signUpContext = useContext(SignUpContext);
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const authenticationService: AuthenticationService =
    new AuthenticationService();

  const createUserAccount = async () => {
    try {
      if (signUpContext) {
        const nickName = signUpContext.userNickName;
        const bio = signUpContext.userBio;
        const role = signUpContext.userRole;
        const email = signUpContext.userEmail;
        const password = signUpContext.userPassword;
        if (!nickName || !bio || !role || !email || !password) {
          return window.alert("Error creating account");
        }
        const result = await authenticationService.createNewUserProfile(
          nickName,
          bio,
          role,
          email,
          password
        );

        if (result) {
          setOpen(true);
          setTimeout(() => {
            navigate("/");
          }, 1100);
        }
      } else {
        return window.alert("Error creating account");
      }
    } catch (e) {
      console.log(`Error creating user account: ${e}`);
    }
  };

  useEffect(() => {
    createUserAccount();
  }, []);

  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <Snackbar open={open} message="Account created" autoHideDuration={900} />
      <div className="spinner"></div>
      <h3 className="text-lg font-bold text-heading mt-10">
        Stand still loading...
      </h3>
    </main>
  );
};
export default PostSignUpSplashScreen;
