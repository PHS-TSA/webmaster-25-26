import { NavBar } from "@/components/NavBar.tsx";
import { define } from "@/utils.ts";

export default define.page(({ Component }) => (
  <div class="bg-base-200">
    <NavBar />

    <Component />
  </div>
));
