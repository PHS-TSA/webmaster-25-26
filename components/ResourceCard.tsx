import type { JSX } from "preact";

export interface ResourceCardProps {
  readonly name: string;
  readonly image: string;
  readonly alt: string;
  readonly blurb: string;
}

export function ResourceCard({
  name,
  image,
  alt,
  blurb,
}: ResourceCardProps): JSX.Element {
  return (
    <div class="card h-full shadow-md">
      <div class="card-body p-4 pb-0">
        <h3 class="card-title justify-center">{name}</h3>
      </div>
      <figure class="h-48">
        <img class="size-full object-cover" src={image} alt={alt} />
      </figure>
      <div class="divider m-0" />
      <div class="card-body grow p-4 pt-0">
        <p>{blurb}</p>
      </div>
    </div>
  );
}
