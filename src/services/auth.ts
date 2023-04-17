import { serverConnInstance } from "../config/axiosInstance";

export namespace AuthService {
  export const signin = async (data:any) => {
    return await serverConnInstance.post("/signin",data).then((res) => {
      if (res.data) {
        console.log(res.data);
      }
    });
  };
}
