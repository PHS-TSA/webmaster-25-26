import { useMemo, useState } from "preact/hooks";
import { ResourceCard } from "@/components/ResourceCard.tsx";
import { type ResourceItem, resources } from "@/data/resources.ts";

const categories = [...new Set(resources.map((resource) => resource.category))];

export default function ResourceDirectory() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources = useMemo(() => {
    const query = search.trim().toLowerCase();

    return resources.filter((resource) => {
      const matchesSearch =
        query.length === 0 ||
        [
          resource.name,
          resource.category,
          resource.blurb,
          resource.address,
          resource.cost,
          resource.contact,
        ].some((value) => value.toLowerCase().includes(query));

      const matchesCategory =
        selectedCategory === "All" || resource.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <section class="space-y-8">
      <div class="grid gap-4 p-5 lg:grid-cols-[3fr_2fr]">
        <label class="flex flex-col gap-2">
          <span class="font-semibold text-base-content/70 text-sm">Search</span>
          <input
            class="input input-bordered w-full"
            type="search"
            name="search"
            value={search}
            onInput={(event) => setSearch(event.currentTarget.value)}
            placeholder="Search by service, need, or keyword"
          />
        </label>

        <label class="flex flex-col gap-2">
          <span class="font-semibold text-base-content/70 text-sm">
            Category
          </span>
          <select
            class="select select-bordered w-full"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.currentTarget.value)}
          >
            <option value="All">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div class="flex items-center justify-between gap-4 px-4">
        <p class="text-base-content/70">
          Showing {filteredResources.length} of {resources.length} resources
        </p>
        <button
          type="button"
          class={`btn btn-ghost ${search === "" && selectedCategory === "All" ? "btn-disabled" : ""}`}
          onClick={() => {
            setSearch("");
            setSelectedCategory("All");
          }}
        >
          Clear filters
        </button>
      </div>

      {filteredResources.length > 0 ? (
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filteredResources.map((resource) => (
            <ResourceLinkCard key={resource.href} resource={resource} />
          ))}
        </div>
      ) : (
        <div class="border border-base-300 border-dashed bg-base-100 px-6 py-12 text-center">
          <h2 class="font-semibold text-2xl">No matches found</h2>
          <p class="mx-auto mt-3 max-w-2xl text-base-content/70">
            Try clearing the filters or search for a broader need such as
            "permits", "health", or "utility help".
          </p>
        </div>
      )}
    </section>
  );
}

function ResourceLinkCard({ resource }: { readonly resource: ResourceItem }) {
  return (
    <a
      class="block"
      href={resource.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${resource.name}`}
    >
      <ResourceCard
        name={resource.name}
        category={resource.category}
        blurb={resource.blurb}
        contact={resource.contact}
      />
    </a>
  );
}
