import { STATUS_CODE } from "@std/http";
import { Head } from "fresh/runtime";
import { define } from "@/utils.ts";

interface FormDataState {
  readonly submitted: boolean;
  readonly name: string;
}

export const handler = define.handlers({
  GET(ctx) {
    const url = new URL(ctx.req.url);

    return {
      data: {
        submitted: url.searchParams.get("submitted") === "1",
        name: url.searchParams.get("name") ?? "",
      } satisfies FormDataState,
    };
  },

  async POST(ctx) {
    const formData = await ctx.req.formData();
    const name =
      String(formData.get("resourceName") ?? "").trim() || "Your Suggestion";
    console.log(`Suggestion: ${name}.`);

    return ctx.redirect(
      `/form?submitted=1&name=${encodeURIComponent(name)}`,
      STATUS_CODE.SeeOther,
    );
  },
});

export default define.page<typeof handler>(({ data }) => {
  return (
    <>
      <Head>
        <title>Suggest a Resource | Bridgeton Community Hub</title>
      </Head>

      <main class="mx-auto min-h-screen max-w-6xl px-4 py-8">
        <section class="space-y-4 px-6 py-8">
          <h1 class="font-bold text-4xl">Suggest a new resource</h1>
          <p class="max-w-3xl text-base-content/75">
            Use this form to recommend a service, nonprofit, or program that
            should be considered for the community resource hub.
          </p>
        </section>

        {data.submitted && (
          <section class="alert alert-success my-6">
            <div>
              <h2 class="font-semibold">Submission received</h2>
              <p>{data.name} has been suggested! We'll be in touch soon.</p>
            </div>
          </section>
        )}

        <form
          method="post"
          class="m-6 space-y-6 border border-base-300 bg-base-100 p-6"
        >
          <div class="grid gap-6 md:grid-cols-2">
            <label class="flex flex-col gap-2">
              <span class="font-semibold">Resource name</span>
              <input
                class="input input-bordered"
                name="resourceName"
                type="text"
                required
                placeholder="Name of the organization or service"
              />
            </label>

            <label class="flex flex-col gap-2">
              <span class="font-semibold">Category</span>
              <select class="select select-bordered" name="category" required>
                <option value="">Choose a category</option>
                <option value="Government Services">Government Services</option>
                <option value="Public Safety">Public Safety</option>
                <option value="Housing Support">Housing Support</option>
                <option value="Emergency Assistance">
                  Emergency Assistance
                </option>
                <option value="Animal Services">Animal Services</option>
                <option value="Building Resources">Building Resources</option>
                <option value="Medical Services">Medical Services</option>
                <option value="Community Programs">Community Programs</option>
              </select>
            </label>

            <label class="flex flex-col gap-2">
              <span class="font-semibold">Website or contact link</span>
              <input
                class="input input-bordered"
                name="website"
                type="url"
                required
                placeholder="https://example.org"
              />
            </label>

            <label class="flex flex-col gap-2">
              <span class="font-semibold">Recommended by</span>
              <input
                class="input input-bordered"
                name="submittedBy"
                type="text"
                required
                placeholder="Your name or organization"
              />
            </label>

            <label class="flex flex-col gap-2 md:col-span-2">
              <span class="font-semibold">
                Why should this resource be added?
              </span>
              <textarea
                class="textarea textarea-bordered min-h-36 md:w-full"
                name="details"
                required
                placeholder="Describe who the resource serves, what it offers, and why it would help community members."
              />
            </label>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-4 border-base-300 border-t pt-4">
            <button class="btn bg-primary text-primary-content" type="submit">
              Submit resource suggestion
            </button>
          </div>
        </form>
      </main>
    </>
  );
});
