import type { JSX } from "preact";
import { define } from "@/utils.ts";

interface Resource {
  href: string;
  imageSrc: string;
  imageAlt: string;
  blurb: string;
}

const resources: Resource[] = [
  {
    href: "https://nih.gov",
    imageSrc: "",
    imageAlt: "",
    blurb:
      "The NIH is essential for knowing your latest health research. Check in weekly to stay up-to-date on the latest vaccine information.",
  },
];

export default define.page(() => {
  return (
    <div>
      {resources.map((resource) => (
        <Resource key={resource.href} {...resource} />
      ))}
    </div>
  );
});

function Resource({ imageSrc, imageAlt, blurb }: Resource): JSX.Element {
  return (
    <div class="card h-full shadow-md">
      <img src={imageSrc} alt={imageAlt} />
      <p>{blurb}</p>
    </div>
  );
}
