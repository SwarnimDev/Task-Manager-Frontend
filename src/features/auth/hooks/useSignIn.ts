import { useMutation } from "@tanstack/react-query";
import { signIn, SignInData } from "../api/signIn";

export const useSignIn = () => {
  return useMutation({
    mutationFn: (data: SignInData) => signIn(data),
  });
};
