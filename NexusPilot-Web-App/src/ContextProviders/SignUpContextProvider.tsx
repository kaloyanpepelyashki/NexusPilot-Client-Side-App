import { createContext, useState } from "react";
//Type declarations
type SignUpContextType = {
  userNickName: string | undefined;
  setUserNickName: React.Dispatch<React.SetStateAction<string | undefined>>;
  userRole: string | undefined;
  setUserRole: React.Dispatch<React.SetStateAction<string | undefined>>;
  userEmail: string | undefined;
  setUserEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
  userPassword: string | undefined;
  setUserPassword: React.Dispatch<React.SetStateAction<string | undefined>>;
  userBio: string | undefined;
  setUserBio: React.Dispatch<React.SetStateAction<string | undefined>>;
};
type SignUpContextProviderComponentProps = {
  children: React.ReactNode;
};
//
//This context's purpose is to maintain the state between the different sign-up routes
export const SignUpContext = createContext<SignUpContextType | null>(null);

const SignUpContextProvider: React.FC<SignUpContextProviderComponentProps> = ({
  children,
}) => {
  const [userNickName, setUserNickName] = useState<string | undefined>("");
  const [userRole, setUserRole] = useState<string | undefined>("");
  const [userEmail, setUserEmail] = useState<string | undefined>("");
  const [userPassword, setUserPassword] = useState<string | undefined>("");
  const [userBio, setUserBio] = useState<string | undefined>("");

  return (
    <SignUpContext.Provider
      value={{
        userNickName,
        setUserNickName,
        userRole,
        setUserRole,
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword,
        userBio,
        setUserBio,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

export default SignUpContextProvider;
