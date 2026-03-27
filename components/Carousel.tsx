import type { ComponentChildren, JSX } from "preact";

export interface CarouselProps {
  readonly children: ComponentChildren;
}

export default function Carousel({ children }: CarouselProps): JSX.Element {
  return (
    <div class="relative w-full [anchor-name:--carousel]">
      {/** biome-ignore lint/a11y/useSemanticElements: This is a list. */}
      <ul
        class="carousel-scroll flex gap-4 overflow-x-auto scroll-smooth px-0 py-4 [scrollbar-width:none]"
        role="region"
        aria-label="Spotlight carousel"
      >
        {children}
      </ul>
    </div>
  );
}

export function CarouselItem({
  children,
}: {
  readonly children: ComponentChildren;
}): JSX.Element {
  return <li class="carousel-item">{children}</li>;
}
