import type { ComponentChildren } from "preact";

export interface ButtonProps {
  readonly id?: string;
  readonly onClick?: () => void;
  readonly children?: ComponentChildren;
  readonly disabled?: boolean;
}

export function Button(props: ButtonProps) {
  return <button class="btn btn-dash btn-primary" {...props} />;
}
