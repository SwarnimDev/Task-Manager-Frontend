import { useMutation } from "@tanstack/react-query";
import { signUp, SignUpData } from "../api/signUp";

export const useSignUp = () => {
  return useMutation({
    mutationFn: (data: SignUpData) => signUp(data),
  });
};
