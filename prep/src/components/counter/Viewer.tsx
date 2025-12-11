import { useCount, useVal } from "@/store/count";

export default function Viewer() {
  const count = useCount();
  const val = useVal();

  return (
    <>
      <h1>{count}</h1>
      <p>{val}</p>
    </>
  );
}
