import { Head } from "fresh/runtime";
import { ChevronsRight } from "lucide-preact";
import { CarouselItem } from "@/components/Carousel.tsx";
import { ResourceCard } from "@/components/ResourceCard.tsx";
import { define } from "@/utils.ts";
import Carousel from "../components/Carousel.tsx";

export default define.page(() => {
  return (
    <div class="mx-auto min-h-screen px-4 py-8">
      <Head>
        <title>Bridgeton Resources</title>
      </Head>
      <div class="mx-auto flex max-w-5xl flex-col items-center justify-center">
        <h1 class="font-bold text-4xl">Bridgeton Resource Directory</h1>

        <h2>About Us</h2>
        <p>
          The City of Bridgeton is Happy to Help!{" "}
          <a class="text-primary" href="/about">
            Learn More! <ChevronsRight class="inline size-4" />
          </a>
        </p>

        <h2>Spotlight</h2>
        <Carousel>
          <CarouselItem>
            <ResourceCard
              name="City Hall"
              image="/images/image.png"
              alt="the City of Bridgeton logo"
              blurb="Visit Bridgeton City Hall for permits, records, and general municipal services."
            />
          </CarouselItem>
          <CarouselItem>
            <ResourceCard
              name="Public Library"
              image="/logo.svg"
              alt="Bridgeton logo"
              blurb="Access free books, digital resources, and community programs at the Bridgeton Public Library."
            />
          </CarouselItem>
        </Carousel>

        <h2>Upcoming Events</h2>

        <h2>Resources</h2>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2"></div>
      </div>
    </div>
  );
});
