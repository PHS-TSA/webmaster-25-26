import { Head } from "fresh/runtime";
import { define } from "@/utils.ts";

export default define.page(() => {
  return (
    <>
      <Head>
        <title>About the City | Bridgeton Community Hub</title>
      </Head>

      <main class="mx-auto flex min-h-screen max-w-6xl flex-col px-10 py-8">
        <h1 class="space-y-4 py-8 font-bold text-4xl">
          About the City of Bridgeton
        </h1>
        <p>
          Ever since we were founded in 1794, the city has been dedicated to
          helping ensure that our valued citizens always able to make ends meet!
          This website is our latest project that works with our community for
          our community. Hopefully you'll find something helpful today!
        </p>

        <div class="mt-14">
          <a class="btn btn-outline btn-primary" href="/resources">
            Browse Resources
          </a>
        </div>
      </main>
    </>
  );
});
