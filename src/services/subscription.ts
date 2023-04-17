import { serverConnInstance } from "../config/axiosInstance";

export namespace SubscriptionService {
  export const getSubscriptionStatus = async () => {
    return await serverConnInstance.get("/get-subscriptions").then((res) => {
      if (res.data) {
        console.log(res.data);
      }
    });
  };

  export const changeSubscriptionStatus = async (data: any) => {
    return await serverConnInstance
      .post("/change-subscription-status", data)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
        }
      });
  };

  export const removeSubscription = async (data: any) => {
    return await serverConnInstance
      .get("/remove-subscription", data)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
        }
      });
  };
}
