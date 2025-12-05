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
      // todos 캐시 데이터 무효화 => refetching
      // queryClient.invalidateQueries({
      //   queryKey: QUERY_KEYS.todo.list,
      // });

      // 캐시 데이터 수정
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [newTodo];
        return [...prevTodos, newTodo];
      });
    },
    onError: (error) => {
      window.alert(error.message);
    },
  });
}
