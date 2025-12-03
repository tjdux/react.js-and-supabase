import { fetchTodos } from "@/api/fetch-todos";
import { useQuery } from "@tanstack/react-query";

export function useTodosData() {
  return useQuery({
    queryFn: fetchTodos,
    queryKey: ["todos"], // 캐시를 식별하는 고유 키
  });
}
