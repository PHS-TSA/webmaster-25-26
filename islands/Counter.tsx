import type { Signal } from "@preact/signals";
import { useId } from "preact/hooks";
import { Button } from "@/components/Button.tsx";

interface CounterProps {
  readonly count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  const decrementId = useId();
  const incrementId = useId();

  return (
    <div class="flex gap-8 py-6">
      <Button
        id={decrementId}
        onClick={() => {
          props.count.value -= 1;
        }}
      >
        -1
      </Button>
      <p class="text-3xl tabular-nums">{props.count}</p>
      <Button
        id={incrementId}
        onClick={() => {
          props.count.value += 1;
        }}
      >
        +1
      </Button>
    </div>
  );
}
