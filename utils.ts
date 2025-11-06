import { createDefine } from "fresh";

/**
 * This specifies the type of `ctx.state`,
 * which is used to share data among middlewares, layouts and routes.
 */
// biome-ignore lint/suspicious/noEmptyInterface: Who even invented YAGNI?
export interface State {}

export const define = createDefine<State>();
