import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "@/api/create-todo";
import { QUERY_KEYS } from "@/lib/constants";

export function useCreateTodoMutation() {
  const queryClient = useQueryClient();
  // useQueryClient(): 서버상태와 관련된 데이터를 저장하는 보관소

  return useMutation({
    mutationFn: createTodo,

    // Event Handler
    onMutate: () => {},
    onSettled: () => {},

    // newTodo: createTodo 함수의 반환값
    onSuccess: (newTodo) => {
      queryClient.setQueryData<Todo>(
        QUERY_KEYS.todo.detail(newTodo.id),
        newTodo,
      );
      queryClient.setQueryData<string[]>(
        QUERY_KEYS.todo.list,
        (prevTodoIds) => {
          if (!prevTodoIds) return [newTodo.id];
          return [...prevTodoIds, newTodo.id];
        },
      );
    },
    onError: (error) => {
      window.alert(error.message);
    },
  });
}
