import { useMutation } from "@tanstack/react-query";
import { createTodo } from "@/api/create-todo";

export function useCreateTodoMutation() {
  return useMutation({
    mutationFn: createTodo,
    // Event Handler
    onMutate: () => {},
    onSettled: () => {},
    onSuccess: () => {
      window.location.reload();
    },
    onError: (error) => {
      window.alert(error.message);
    },
  });
}
