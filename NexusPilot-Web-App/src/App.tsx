import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DashBoard } from "./Pages/DashBoard";
import { SignInScreen } from "./Pages/SignInScreen";
import { SignUpScreen } from "./Pages/SignUpScreen";
import { SignUpScreenInitial } from "./UI-Components/Global-Components/SignUpScreen-initial";
import InProjectPage from "./Pages/InProjectPage";

function App() {
  return (
    <div className="w-full h-full bg-background">
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/auth/Signin" element={<SignInScreen />} />
        <Route path="/auth/signup" element={<SignUpScreen />}>
          <Route index element={<SignUpScreenInitial />} />
        </Route>
        <Route path="/project/:projectId" element={<InProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
