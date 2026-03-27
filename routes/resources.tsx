import { Head } from "fresh/runtime";
import ResourceDirectory from "@/islands/ResourceDirectory.tsx";
import { define } from "@/utils.ts";

export default define.page(() => {
  return (
    <>
      <Head>
        <title>Resource Directory | Bridgeton Community Hub</title>
      </Head>

      <main class="mx-auto min-h-screen max-w-6xl px-4 py-8">
        <header class="space-y-4 px-6 py-8">
          <h1 class="max-w-3xl font-bold text-4xl">
            Search and filter community resources
          </h1>
        </header>

        <section class="mt-10">
          <ResourceDirectory />
        </section>
      </main>
    </>
  );
});
