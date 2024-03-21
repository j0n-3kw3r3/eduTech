import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./page/home";
import React from "react";
import Signup from "./page/signup";
import Login from "./page/login";
import Parentdashboard from "./page/parentdashboard";
import Warddetails from "./components/molecule/warddetails";
import { WardList } from "./components/molecule/WardList";

const Router = () => {
  // let isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="parentdashboard" element={<Parentdashboard />}>
          <Route path="ward" index element={<WardList />} />
          <Route path=":wardId" element={<Warddetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
