import { serverConnInstance } from "../config/axiosInstance";

export namespace FeedbackService {
  export const getAllFeedbacks = async (data: any) => {
    return await serverConnInstance
      .post("/get-all-feedbacks", data)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
        }
      });
  };
}
