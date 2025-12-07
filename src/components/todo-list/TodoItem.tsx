import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";
import { useDeleteTodoMutation } from "@/hooks/mutations/use-delete-todo-mutation";

export default function TodoItem({ id, content, isDone }: Todo) {
  const { mutate: deleteTodo, isPending: isDeleteTodoPending } =
    useDeleteTodoMutation();
  const { mutate: updateTodo } = useUpdateTodoMutation();

  const handleDeleteClick = () => {
    deleteTodo(id);
  };

  const handleCheckboxClick = () => {
    updateTodo({
      id,
      isDone: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex gap-5">
        <input
          type={"checkbox"}
          checked={isDone}
          onClick={handleCheckboxClick}
          disabled={isDeleteTodoPending}
        />
        <Link to={`/todolist/${id}`} className={isDone ? "line-through" : ""}>
          {content}
        </Link>
      </div>
      <Button
        variant={"destructive"}
        onClick={handleDeleteClick}
        disabled={isDeleteTodoPending}
      >
        <Trash />
      </Button>
    </div>
  );
}
