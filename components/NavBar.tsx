import type { JSX } from "preact";

export function NavBar(): JSX.Element {
  return (
    <nav class="@container flex flex-col items-center bg-primary px-8 py-4 text-primary-content sm:flex-row">
      <a href="/">
        <img
          class="size-14"
          src="/images/image.png"
          width="128"
          height="128"
          alt="the City of Bridgeton logo: a stylized capital B."
        />
      </a>
      <div class="grow"></div>

      <div class="flex items-center @2xs:gap-8 @xs:gap-12 gap-4 bg-primary text-primary-content">
        <a class="ml-auto" href="/calendar">
          Upcoming
        </a>
        <a href="/about">About Us</a>
        <a href="/resources">Resources</a>
      </div>
    </nav>
  );
}
