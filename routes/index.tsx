import { Head } from "fresh/runtime";
import { ChevronsRight } from "lucide-preact";
import type { JSX } from "preact";
import Carousel, { CarouselItem } from "@/components/Carousel.tsx";
import { ResourceCard } from "@/components/ResourceCard.tsx";
import {
  type CommunityEvent,
  communityEvents,
  featuredResources,
} from "@/data/resources.ts";
import { define } from "@/utils.ts";

export default define.page(() => {
  return (
    <>
      <Head>
        <title>Bridgeton Community Hub</title>
      </Head>

      <main class="mx-auto min-h-screen max-w-6xl px-4 py-8">
        <section class="flex justify-between gap-6 overflow-hidden bg-primary px-6 py-8 text-primary-content/90 lg:px-10 lg:py-12">
          <div class="space-y-6">
            <div class="space-y-4">
              <h1 class="max-w-3xl font-bold text-4xl leading-tight sm:text-5xl">
                The City of Bridgeton is Happy to Help!
              </h1>
              <p class="max-w-2xl text-lg text-primary-content/80">
                We've launched this new site to help connect our valued
                community members with the resources they desperately need.{" "}
                <a class="text-primary-content" href="/about">
                  Learn More! <ChevronsRight class="inline size-4" />
                </a>
              </p>
            </div>
            <div class="flex flex-wrap gap-3">
              <a class="btn" href="/resources">
                Browse the directory
              </a>
              <a class="btn btn-outline" href="/form">
                Suggest a new resource
              </a>
            </div>
          </div>

          <img
            alt="The City of Bridgeton Smiles Upon You"
            src="/images/image.png"
            class="h-full"
          />
        </section>

        <section class="mt-14 space-y-5">
          <div class="flex items-end justify-between gap-4">
            <div class="space-y-2">
              <h2 class="font-semibold text-3xl">
                Featured community resources
              </h2>
            </div>
            <a
              class="text-primary text-sm underline-offset-4 hover:underline"
              href="/resources"
            >
              Open full directory
            </a>
          </div>

          <Carousel>
            {featuredResources.map((resource) => (
              <CarouselItem key={resource.name}>
                <a
                  class="block"
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ResourceCard
                    name={resource.name}
                    category={resource.category}
                    blurb={resource.blurb}
                    contact={resource.contact}
                  />
                </a>
              </CarouselItem>
            ))}
          </Carousel>
        </section>

        <section class="mt-14 grid gap-6">
          <div class="space-y-5 p-6">
            <div class="w-min space-y-2">
              <h2 class="w-max border-b-2 pb-0.5 font-semibold text-3xl">
                Upcoming events
              </h2>
            </div>
            <div class="space-y-4">{communityEvents.map(Event)}</div>
            <a class="btn btn-outline btn-primary" href="/calendar">
              View more upcoming events
            </a>
          </div>
        </section>
      </main>
    </>
  );
});

function Event(event: CommunityEvent): JSX.Element {
  return (
    <article key={event.title} class="p-4">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 class="font-semibold text-xl">{event.title}</h3>
          <p class="text-base-content/70">{event.description}</p>
        </div>
        <div class="text-base-content/65 text-sm">
          <p class="text-primary">{event.date}</p>
          <p class="text-primary">{event.time}</p>
        </div>
      </div>
      <p class="mt-3 text-base-content/70 text-sm">
        Location: <span class="text-primary">{event.location}</span>
      </p>
    </article>
  );
}
