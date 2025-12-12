import { singUp } from "@/api/auth";
import type { AuthError } from "@supabase/supabase-js";
import { useMutation } from "@tanstack/react-query";

export function useSignUp() {
  return useMutation({
    mutationFn: singUp,
    onError: (err: AuthError) => {
      console.log(err.status, err.code, err.message);
    },
  });
}
