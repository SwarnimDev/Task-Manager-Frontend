import axiosClient from "../../../api/axiosClient";

export interface SignInData {
  email: string;
  password: string;
}

export const signIn = async (data: SignInData) => {
  const response = await axiosClient.post("/auth/signin", data);
  return response.data;
};
