import { togglePostLike } from "@/api/post";
import type { UseMutationCallback } from "@/types/types";
import { useMutation } from "@tanstack/react-query";

export default function useTogglePostLike(calllbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: togglePostLike,
    onSuccess: () => {
      if (calllbacks?.onSuccess) calllbacks.onSuccess();
    },
    onError: (error) => {
      if (calllbacks?.onError) calllbacks.onError(error);
    },
  });
}
