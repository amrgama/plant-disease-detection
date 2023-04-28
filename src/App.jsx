import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.css";
import "react-toastify/dist/ReactToastify.css";
import AuthLayout from "./layout/AuthLayout";
import MainLayout from "./layout/MainLayout";

import Signup from "./pages/Auth/Signup";
import Signin from "./pages/Auth/Signin";
import ForgotPassword from "./pages/auth/forgot-password";
import ResetPassword from "./pages/auth/Reset-Password";
import ConfirmEmail from "./pages/Auth/Confirm-Email";
import Home from "./pages/home/Home";
import DiseaseDetection from "./pages/diseaseDetection/DiseaseDetection";
import About from "./pages/about/About";
import MyAccount from "./pages/myAccount/MyAccount";
// import LayOut from "./layouts/LayOut";
// import Header from "./components/header/Header";
// import AuthLayout from "./layouts/AuthLayout";
// import ConfirmEmail from "./pages/Auth/ConfirmEmail";
// import SignIn from "./pages/Auth/Signin";
// import ForgotPassword from "./pages/Auth/ForgotPassword";
// import ResetPassword from "./pages/Auth/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/signin" element={<Signin />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/auth/reset-password/:token"
            element={<ResetPassword />}
          />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/disease-detection" element={<DiseaseDetection />} />
          <Route path="/my-account" element={<MyAccount />}/>
          <Route path="/about" element={<About />}/>          
        </Route>
        {/* <Route path="/" element={<LayOut />}></Route> */}
        <Route path="/confirm-email/:token/" element={<ConfirmEmail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
