import type { JSX } from "preact";

export interface ResourceCardProps {
  readonly name: string;
  readonly category: string;
  readonly blurb: string;
  readonly contact: string;
}

export function ResourceCard({
  name,
  category,
  blurb,
  contact,
}: ResourceCardProps): JSX.Element {
  return (
    <article class="flex h-full flex-col justify-between p-5">
      <div class="space-y-4">
        <div class="space-y-2">
          <div class="flex items-center justify-between gap-3">
            <h3 class="font-semibold text-2xl leading-tight">{name}</h3>

            <span class="bg-primary/20 px-3 py-1 font-semibold text-base-content/75 text-xs">
              {category}
            </span>
          </div>
          <p class="text-base-content/80 leading-6">{blurb}</p>
        </div>
      </div>

      <div class="mt-6 space-y-2 border-base-300 border-t py-4 text-base-content/70 text-sm">
        <p>{contact}</p>
      </div>
    </article>
  );
}
