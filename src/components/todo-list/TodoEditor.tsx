import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useCreateTodoMutation } from "@/hooks/mutations/use-create-todo-mutation";

export default function TodoEditor() {
  // mutate: 비동기 요청을 실행하는 함수
  // isPending: 비동기 요청의 로딩 상태 보관
  const { mutate, isPending } = useCreateTodoMutation();

  const [content, setContent] = useState("");

  const handleAddClick = () => {
    if (content.trim() === "") return;
    mutate(content);
    setContent("");
  };

  return (
    <div className="flex gap-2">
      <Input
        placeholder="새로운 할 일을 입력하세요...✏️"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <Button onClick={handleAddClick} disabled={isPending}>
        <Plus />
      </Button>
    </div>
  );
}
