import { serverConnInstance } from "../config/axiosInstance";

export namespace UserService {
  export const getUsers = async () => {
    return await serverConnInstance.get("/get-users").then((res) => {
      return res
    });
  };

  export const addUser = async (data: any) => {
    return await serverConnInstance.post("/add-user", data).then((res) => {
      if (res.data) {
        console.log(res.data);
      }
    });
  };

  export const updateUser = async (data: any) => {
    return await serverConnInstance.post("/update-user", data).then((res) => {
      if (res.data) {
        console.log(res.data);
      }
    });
  };

  export const removeUser = async (data: any) => {
    return await serverConnInstance.post("/remove-user", data).then((res) => {
      if (res.data) {
        console.log(res.data);
      }
    });
  };
}
