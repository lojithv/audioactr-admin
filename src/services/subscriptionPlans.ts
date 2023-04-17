import { serverConnInstance } from "../config/axiosInstance";

export namespace SubscriptionPlansService {
  export const getAllSubscriptionPlans = async () => {
    return await serverConnInstance.get("/get-all-plans").then((res) => {
      if (res.data) {
        console.log(res.data);
      }
    });
  };

  export const addSubscriptionPlan = async (data: any) => {
    return await serverConnInstance
      .post("/add-subscription-plan", data)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
        }
      });
  };

  export const editSubscriptionPlan = async (data: any) => {
    return await serverConnInstance
      .post("/edit-subscription-plan", data)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
        }
      });
  };

  export const removeSubscriptionPlan = async (data: any) => {
    return await serverConnInstance
      .post("/remove-subscription-plan", data)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
        }
      });
  };
}
