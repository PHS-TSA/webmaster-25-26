import { Head } from "fresh/runtime";
import { define } from "@/utils.ts";

export default define.page(() => {
  return (
    <div class="mx-auto min-h-screen px-4 py-8">
      <Head>
        <title>About the City | Bridgeton Resources</title>
      </Head>
      <main class="mx-auto flex max-w-3xl flex-col items-center justify-center">
        <h1 class="font-bold text-4xl">About the City of Bridgeton</h1>
        <p>
          Ever since we were founded in 18??, The city has been dedicated to
          helping ensure that our valued citizens always able to make ends meet!
        </p>
      </main>
    </div>
  );
});
