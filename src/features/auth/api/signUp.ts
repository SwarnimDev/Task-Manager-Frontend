import axiosClient from "../../../api/axiosClient";

export interface SignUpData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const signUp = async (data: SignUpData) => {
  const response = await axiosClient.post("/auth/signup", data);
  return response.data;
};
