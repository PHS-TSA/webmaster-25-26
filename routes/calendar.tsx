import { Head } from "fresh/runtime";
import { communityEvents } from "@/data/resources.ts";
import Calendar from "@/islands/Calendar.tsx";
import { define } from "@/utils.ts";

export default define.page(() => {
  return (
    <>
      <Head>
        <title>Community Events | Bridgeton Community Hub</title>
      </Head>

      <main class="mx-auto min-h-screen max-w-6xl px-4 py-8">
        <section class="space-y-4 px-6 py-8">
          <h1 class="font-bold text-4xl">Community events and programs</h1>
        </section>

        <section class="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div class="space-y-4 p-6">
            <h2 class="font-semibold text-2xl">Upcoming dates</h2>
            {communityEvents.map((event) => (
              <article
                key={event.title}
                class="border-base-300 border-b pb-4 last:border-b-0"
              >
                <h3 class="font-semibold text-xl">{event.title}</h3>
                <p class="mt-1 text-base-content/70 text-sm">
                  {event.date} | {event.time}
                </p>
                <p class="mt-2 text-base-content/75">{event.description}</p>
                <p class="mt-2 text-base-content/65 text-sm">
                  Location: {event.location}
                </p>
              </article>
            ))}
          </div>

          <div class="p-4">
            <Calendar />
          </div>
        </section>
      </main>
    </>
  );
});
