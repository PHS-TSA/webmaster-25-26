import { Head } from "fresh/runtime";
import { SpotlightItem } from "@/components/SpotlightItem.tsx";
import Carousel from "@/islands/Carousel.tsx";
import { define } from "@/utils.ts";

export default define.page(() => {
  return (
    <div class="mx-auto min-h-screen px-4 py-8">
      <Head>
        <title>Bridgeton Resources</title>
      </Head>
      <div class="mx-auto flex max-w-3xl flex-col items-center justify-center">
        <h1 class="font-bold text-4xl">Bridgeton Resource Directory</h1>

        <h2>About Us</h2>
        <p>
          The City of Bridgeton is Happy to Help!{" "}
          <a href="/about">
            read more{" "}
            {
              // TODO: Pull in a tiny bit of Lucide
              ">"
            }
          </a>
        </p>

        <h2>Spotlight</h2>
        <Carousel>
          <SpotlightItem />
        </Carousel>

        <h2>Upcoming Events</h2>
      </div>
    </div>
  );
});
