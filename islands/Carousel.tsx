import type { ComponentChildren, JSX } from "preact";
import { Carousel as CarouselBase } from "@/components/Carousel.tsx";

export interface CarouselProps {
  readonly children: ComponentChildren;
}

export default function Carousel({ children }: CarouselProps): JSX.Element {
  return (
    <div class="relative w-full">
      <CarouselBase>{children}</CarouselBase>
    </div>
  );
}
