import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DashBoard } from "./Pages/DashBoard";
import { SignInScreen } from "./Pages/SignInScreen";
import { SignUpScreen } from "./Pages/SignUpScreen";
import { SignUpScreenInitial } from "./UI-Components/Global-Components/SignUpScreen-initial";
import InProjectPage from "./Pages/InProjectPage";
import ProjectsService from "./ServiceLayer/ProjectsService";
import { AccessStateProviderComponent } from "./ContextProviders/AccessStateProvider";
import PostSigninSplashScreen from "./Pages/PostSignInSplashScreen";
import ProtectedRoute from "./Routes/GuardedRoute";

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
      </AccessStateProviderComponent>
    </div>
  );
}

export default App;
