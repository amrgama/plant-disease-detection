import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { useSelector, useDispatch } from "react-redux";
import { getStatus } from "../features/user/userSlice";
import Loading from "../components/loading/Loading";
import Footer from "../components/footer/Footer";
const MainLayout = () => {
  const { auth, user } = useSelector((state) => state);
  const { token } = auth;
  const { isFirstLogin, statusLoading } = user;
  const dispatch = useDispatch();
  useEffect(() => {
    if (token && isFirstLogin) {
      dispatch(getStatus());
    }
  }, []);

  return (
    <div>
      {statusLoading ? (
        <div className="position-fixed d-flex align-items-center justify-content-center top-0 start-0 w-100 vh-100">
          <Loading />
        </div>
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default MainLayout;
