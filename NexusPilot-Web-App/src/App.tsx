import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DashBoard } from "./Pages/DashBoard";
import { SignInScreen } from "./Pages/SignInScreen";
import { SignUpScreen } from "./Pages/SignUpScreen";
import SignUpScreenInitial from "./UI-Components/Global-Components/SignUpScreenInitial";
import InProjectPage from "./Pages/InProjectPage";
import ProjectsService from "./ServiceLayer/ProjectsService";
import { AccessStateProviderComponent } from "./ContextProviders/AccessStateProvider";
import PostSigninSplashScreen from "./Pages/PostSignInSplashScreen";
import ProtectedRoute from "./Routes/GuardedRoute";
import SignUpScreenSecond from "./UI-Components/Global-Components/SignUpScreenSecond";
import SignUpContextProvider from "./ContextProviders/SignUpContextProvider";
import SignUpScreenThird from "./UI-Components/Global-Components/SignUpScreenThird";
import SignUpScreenFourth from "./UI-Components/Global-Components/SignUpScreenFourth";
import SignUpScreenFifth from "./UI-Components/Global-Components/SignUpScreenFifth";
import PostSignUpSplashScreen from "./Pages/PostSignUpSplashScreen";

function App() {
  const projectsService = new ProjectsService();
  async function TestRun() {
    await projectsService.getAllProjectsForUser(
      "d4199734-7b37-40f9-b674-e940183c0c8e",
      "test token"
    );
  }

  TestRun();

  return (
    <div className="w-full h-full bg-background">
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
            <Route path="/" element={<SignInScreen />} />
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
          </Routes>
        </SignUpContextProvider>
      </AccessStateProviderComponent>
    </div>
  );
}

export default App;
