import { useSignal } from "@preact/signals";
import { Head } from "fresh/runtime";
import Counter from "@/islands/Counter.tsx";
import { define } from "@/utils.ts";

const initialCount = 3;

export default define.page(() => {
  const count = useSignal(initialCount);

  return (
    <div class="mx-auto min-h-screen px-4 py-8">
      <Head>
        <title>Bridgeton Resources</title>
      </Head>
      <div class="mx-auto flex max-w-3xl flex-col items-center justify-center">
        <img
          class="my-6"
          src="/images/image.png"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="font-bold text-4xl">Bridgeton Resource Directory</h1>

        <Counter count={count} />
      </div>
    </div>
  );
});
