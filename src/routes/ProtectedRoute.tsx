import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

type Props = {};

const ProtectedRoute = ({ user, redirectPath = "/signin", children }: any) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate(redirectPath);
    }
  }, []);

  return children;
};

export default ProtectedRoute;
