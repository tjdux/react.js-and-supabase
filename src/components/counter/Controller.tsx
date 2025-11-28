import { useDecreaseCount, useIncreaseCount } from "@/store/count";
import { Button } from "../ui/button";

export default function Controller() {
  const decrease = useDecreaseCount();
  const increase = useIncreaseCount();

  return (
    <>
      <Button onClick={decrease} className="mr-1">
        -
      </Button>
      <Button onClick={increase}>+</Button>
    </>
  );
}
