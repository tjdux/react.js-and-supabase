import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDeleteTodo } from "@/store/todos";

export default function TodoItem({ id, content }: Todo) {
  const deleteTodo = useDeleteTodo();

  const handleDeleteClick = () => {
    deleteTodo(id);
  };

  return (
    <div className="flex items-center justify-between border p-2">
      {content}
      <Button variant={"destructive"} onClick={handleDeleteClick}>
        <Trash />
      </Button>
    </div>
  );
}
