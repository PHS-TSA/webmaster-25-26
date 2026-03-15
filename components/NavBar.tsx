import type { JSX } from "preact";

export function NavBar(): JSX.Element {
  return (
    <nav class="flex items-center gap-10 bg-amber-500 px-2 py-4">
      <img
        class="size-14"
        src="/images/image.png"
        width="128"
        height="128"
        alt="the City of Bridgeton logo: a stylized capital B."
      />
      <div class="flex-1"></div>

      <a href="/home">Home</a>
      <a href="/calendar">Upcoming</a>
      <a href="/about">About Us</a>
      <a href="/resources">Resources</a>
    </nav>
  );
}
