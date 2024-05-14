import { createContext } from "react";
//Type declarations
type SignUpContextType = {
  userNickName: string | undefined;
  setUserNickName: React.Dispatch<React.SetStateAction<string>>;
  userRole: string | undefined;
  setUserRole: React.Dispatch<React.SetStateAction<string>>;
  userEmail: string | undefined;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  userPassword: string | undefined;
  setUserPassword: React.Dispatch<React.SetStateAction<string>>;
  userBio: string | undefined;
  setUserBio: React.Dispatch<React.SetStateAction<string>>;
};
type SignUpContextProviderComponentProps = {
  children: React.ReactNode;
};
//
//This context's purpose is to maintain the state between the different sign-up routes
const SignUpContext = createContext<SignUpContextType | null>(null);

const SignUpContextProvider: React.FC = ({ children }) => {
  return <SignUpContext.Provider value={{}}>{children}</SignUpContext.Provider>;
};

export default SignUpContextProvider;
