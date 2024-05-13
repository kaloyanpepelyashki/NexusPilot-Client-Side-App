import React, { createContext, useState } from "react";
import SignInReturnObject from "../Models/Auth/SignInReturnObject";
import User from "../Models/Auth/User";

//Type declarations
type AccessStateType = {
  currentUserState: SignInReturnObject | undefined;
  setCurrentUserState: React.Dispatch<
    React.SetStateAction<SignInReturnObject | undefined>
  >;
  userObject: User | undefined;
  setUserObject: React.Dispatch<React.SetStateAction<User | undefined>>;
  authenticationState: boolean;
  setAuthenticationState: React.Dispatch<React.SetStateAction<boolean>>;
};

type AccessStateProviderComponentProps = {
  children: React.ReactNode;
};
//
export const AccessState = createContext<AccessStateType | null>(null);

export const AccessStateProviderComponent: React.FC<
  AccessStateProviderComponentProps
> = ({ children }) => {
  const [currentUserState, setCurrentUserState] =
    useState<SignInReturnObject>();

  const [userObject, setUserObject] = useState<User>();

  const [authenticationState, setAuthenticationState] =
    useState<boolean>(false);

  return (
    <AccessState.Provider
      value={{
        currentUserState,
        setCurrentUserState,
        userObject,
        setUserObject,
        authenticationState,
        setAuthenticationState,
      }}
    >
      {children}
    </AccessState.Provider>
  );
};
