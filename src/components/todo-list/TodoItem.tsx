import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";

export default function TodoItem({ id, content, isDone }: Todo) {
  const { mutate } = useUpdateTodoMutation();

  const handleDeleteClick = () => {};

  const handleCheckboxClick = () => {
    mutate({
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
        />
        <Link to={`/todolist/${id}`} className={isDone ? "line-through" : ""}>
          {content}
        </Link>
      </div>
      <Button variant={"destructive"} onClick={handleDeleteClick}>
        <Trash />
      </Button>
    </div>
  );
}
