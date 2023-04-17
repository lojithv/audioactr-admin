import localforage from "localforage";
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

type Props = {};

const ProtectedRoute = ({ user, redirectPath = "/signin", children }: any) => {
  const navigate = useNavigate();

  useEffect(() => {
    localforage.getItem("user").then((data) => {
      if (!data) {
        navigate(redirectPath);
      }
    });
  }, []);

  return children;
};

export default ProtectedRoute;
