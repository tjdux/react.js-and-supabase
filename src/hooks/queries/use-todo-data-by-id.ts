import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { QUERY_KEYS } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export function useTodoDataById(id: string, type: "LIST" | "DETAIL") {
  return useQuery({
    queryFn: () => fetchTodoById(id),
    queryKey: QUERY_KEYS.todo.detail(id),

    enabled: type === "DETAIL", // 디테일 페이지에서 호출했을 때 refetch

    //staleTime: 5000, // staleTime (fresh -> stale까지의 시간)
    //gcTime: 5000, // gcTime (Garbage Collecting Time: inactive -> deleted까지의 시간)
    // ✨ staleTime과 gcTime은 별개의 상황에서 동작! (staleTime은 fresh 상태에서, gcTime은 inactive 상태에서 동작)

    // stale 상태에서...
    // refetchOnMount: false, // 마운트 시점에서는 refetch X
    // refetchOnWindowFocus: false, // 윈도우 시점에서 refetch X
    // refetchOnReconnect: false, // 재연결되는 시점에서 refetch X
    // refetchInterval: false, // 주기적으로 refetch X
  });
}
