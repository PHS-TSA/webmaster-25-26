import type { JSX } from "preact";

export function SpotlightItem(): JSX.Element {
  return (
    <div class="card card-body card-md">
      <img
        class="size-14"
        src="/images/image.png"
        width="128"
        height="128"
        alt="the City of Bridgeton logo: a stylized capital B."
      />
    </div>
  );
}
