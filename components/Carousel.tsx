import type { ComponentChildren, JSX } from "preact";

export interface CarouselProps {
  readonly children: ComponentChildren;
}

export function Carousel({ children }: CarouselProps): JSX.Element {
  return (
    <div class="relative w-full [anchor-name:--carousel]">
      <ul
        class="carousel-scroll flex gap-4 overflow-x-auto scroll-smooth px-0 py-4"
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
