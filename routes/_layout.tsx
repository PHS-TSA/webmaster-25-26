import { define } from "@/utils.ts";
import { NavBar } from "../components/NavBar.tsx";

export default define.page(({ Component }) => (
  <div class="bg-base-400 dark:bg-base-600">
    <NavBar />

    <Component />
  </div>
));
