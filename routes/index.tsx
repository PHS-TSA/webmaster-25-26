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
        <title>Fresh counter</title>
      </Head>
      <div class="mx-auto flex max-w-3xl flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="font-bold text-4xl">Welcome to Fresh</h1>
        <p class="my-4">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
        <Counter count={count} />
      </div>
    </div>
  );
});
