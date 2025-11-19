import { STATUS_CODE } from "@std/http";
import { define } from "@/utils.ts";

export const handler = define.handlers({
  async GET() {
    return { data: {} };
  },

  async POST(ctx) {
    return ctx.redirect("/", STATUS_CODE.SeeOther);
  },
});

export default define.page<typeof handler>(() => {
  return (
    <form method="post">
      <span>Propose a new Resource</span>

      <button type="submit">Submit</button>
    </form>
  );
});
