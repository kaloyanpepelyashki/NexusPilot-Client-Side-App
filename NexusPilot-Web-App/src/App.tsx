import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DashBoard } from "./Pages/DashBoard";
import { SignInScreen } from "./Pages/SignInScreen";
import { SignUpScreen } from "./Pages/SignUpScreen";
import { SignUpScreen2 } from "./Pages/SignUpScreen2";
import { SignUpScreenInitial } from "./UI-Components/Global-Components/SignUpScreen-initial";

function App() {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/auth/Signin" element={<SignInScreen />} />
        <Route path="Signup" element={<SignUpScreen />}>
          <Route index element={<SignUpScreenInitial />} />
          <Route path="signup-second" element={<SignUpScreen2 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
