import { Head } from "fresh/runtime";
import { referenceSources } from "@/data/resources.ts";
import { define } from "@/utils.ts";

export default define.page(() => {
  return (
    <>
      <Head>
        <title>Reference Page | Bridgeton Community Hub</title>
      </Head>

      <main class="mx-auto min-h-screen max-w-5xl px-4 py-8">
        <header class="space-y-4 px-6 py-8">
          <h1 class="font-bold text-4xl">Reference Page</h1>
        </header>

        <section class="p-6">
          <div class="grid gap-4 md:grid-cols-2">
            <a
              class="btn btn-primary p-5"
              href="/work-log.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 class="w-full text-center font-semibold text-xl">Work Log</h3>
            </a>

            <a
              class="btn btn-primary p-5"
              href="/student-copyright-checklist.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 class="w-full text-center font-semibold text-xl">
                Student Copyright Checklist
              </h3>
            </a>
          </div>
        </section>

        <section class="p-6">
          <h2 class="font-semibold text-2xl">Sources</h2>
          <ul class="mt-5 list-disc space-y-4 p-6">
            {referenceSources.map((source) => (
              <li key={source.id} class="p-1">
                <h3 class="font-semibold text-xl">{source.title}</h3>
                <p class="mt-2 break-all text-primary text-sm">
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.href}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
});
