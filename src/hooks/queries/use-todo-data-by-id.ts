import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { useQuery } from "@tanstack/react-query";

export function useTodoDataById(id: number) {
  return useQuery({
    queryFn: () => fetchTodoById(id),
    queryKey: ["todos", id],

    staleTime: 5000, // staleTime 설정

    // refetchOnMount: false, // 마운트 시점에서는 refetch X
    // refetchOnWindowFocus: false, // 윈도우 시점에서 refetch X
    // refetchOnReconnect: false, // 재연결되는 시점에서 refetch X
    // refetchInterval: false, // 주기적으로 refetch X
  });
}
