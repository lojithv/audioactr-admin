import localforage from "localforage";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const RedirectHandler = (props: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      localforage.getItem("token").then((v) => {
        console.log(v);
        if (v) {
          navigate("/admin");
        } else {
          navigate("/signin");
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return <div>Loading</div>;
};

export default RedirectHandler;
