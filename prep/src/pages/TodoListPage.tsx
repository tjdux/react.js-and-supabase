import TodoEditor from "@/components/todo-list/TodoEditor";
import TodoItem from "@/components/todo-list/TodoItem";
import { useTodosData } from "@/hooks/queries/use-todos-data";

export default function TodoListPage() {
  const { data: todoIds, isLoading, error } = useTodosData();

  if (error) return <div>오류 발생 😣</div>;
  if (isLoading) return <div>로딩 중 입니다... ⏰</div>;

  return (
    <div className="m-auto flex w-100 flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoList</h1>
      <TodoEditor />
      {todoIds?.map((id) => (
        <TodoItem key={id} id={id} />
      ))}
    </div>
  );
}
