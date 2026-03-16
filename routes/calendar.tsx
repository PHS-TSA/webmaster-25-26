import { Head } from "fresh/runtime";
import { define } from "@/utils.ts";
import Calendar from "../islands/Calendar.tsx";

export default define.page(() => {
  return (
    <div class="mx-auto min-h-screen px-4 py-8">
      <Head>
        <title>Upcoming Events | Bridgeton Resources</title>
      </Head>
      <div class="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-6">
        <h1 class="font-bold text-4xl">Upcoming Events</h1>

        <Calendar />
      </div>
    </div>
  );
});
