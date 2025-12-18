import { singUp } from "@/api/auth";
import type { UseMutationCallback } from "@/types/types";
import type { AuthError } from "@supabase/supabase-js";
import { useMutation } from "@tanstack/react-query";

export function useSignUp(callbacks: UseMutationCallback) {
  return useMutation({
    mutationFn: singUp,
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
