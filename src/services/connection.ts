import { serverConnInstance } from "../config/axiosInstance";

export const testServerConn = () => {
    serverConnInstance.get("/test").then((res) => {
      if (res.data?.length) {
        console.log(res.data);
      }
    });
  };