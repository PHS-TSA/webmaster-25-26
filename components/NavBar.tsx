import type { JSX } from "preact";

const links = [
  { href: "/resources", label: "Directory" },
  { href: "/calendar", label: "Events" },
  { href: "/form", label: "Suggest a Resource" },
  { href: "/references", label: "References" },
];

export function NavBar(): JSX.Element {
  return (
    <nav class="sticky top-0 z-20 border-base-300 border-b bg-base-100/90 px-4 py-4 backdrop-blur">
      <div class="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <a class="flex flex-col" href="/">
          <span class="font-semibold text-primary text-sm">Bridgeton</span>
          <span class="text-nowrap font-bold text-2xl text-base-content">
            Community Hub
          </span>
        </a>

        <div class="flex flex-wrap items-center gap-4 text-sm sm:justify-end">
          {links.map((link) => (
            <a
              key={link.href}
              class="px-3 py-2 transition hover:bg-base-200 aria-[current]:not-hover:bg-base-200"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
