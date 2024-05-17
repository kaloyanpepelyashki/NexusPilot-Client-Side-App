import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DashBoard } from "./Pages/DashBoard";
import { SignInScreen } from "./Pages/SignInScreen";
import { SignUpScreen } from "./Pages/SignUpScreen";
import SignUpScreenInitial from "./UI-Components/Global-Components/SignUpScreenInitial";
import InProjectPage from "./Pages/InProjectPage";
import { AccessStateProviderComponent } from "./ContextProviders/AccessStateProvider";
import PostSigninSplashScreen from "./Pages/PostSignInSplashScreen";
import ProtectedRoute from "./Routes/GuardedRoute";
import SignUpScreenSecond from "./UI-Components/Global-Components/SignUpScreenSecond";
import SignUpContextProvider from "./ContextProviders/SignUpContextProvider";
import SignUpScreenThird from "./UI-Components/Global-Components/SignUpScreenThird";
import SignUpScreenFourth from "./UI-Components/Global-Components/SignUpScreenFourth";
import SignUpScreenFifth from "./UI-Components/Global-Components/SignUpScreenFifth";
import PostSignUpSplashScreen from "./Pages/PostSignUpSplashScreen";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <div className="w-full h-full bg-background overflow-y-hidden">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AccessStateProviderComponent>
          <SignUpContextProvider>
            <Routes>
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute fallBackPath="/">
                    <DashBoard />
                  </ProtectedRoute>
                }
              />
              <Route index path="/" element={<SignInScreen />} />
              <Route path="/loading" element={<PostSigninSplashScreen />} />
              <Route path="/auth/signup" element={<SignUpScreen />}>
                <Route index element={<SignUpScreenInitial />} />
                <Route
                  path="/auth/signup/step2"
                  element={<SignUpScreenSecond />}
                />
                <Route
                  path="/auth/signup/step3"
                  element={<SignUpScreenThird />}
                />
                <Route
                  path="/auth/signup/step4"
                  element={<SignUpScreenFourth />}
                />
                <Route
                  path="/auth/signup/step5"
                  element={<SignUpScreenFifth />}
                />
                <Route
                  path="/auth/signup/loading"
                  element={<PostSignUpSplashScreen />}
                />
              </Route>
              <Route
                path="/project/:projectId"
                element={
                  <ProtectedRoute fallBackPath="/">
                    <InProjectPage />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<SignInScreen />} />
            </Routes>
          </SignUpContextProvider>
        </AccessStateProviderComponent>
      </LocalizationProvider>
    </div>
  );
}

export default App;
