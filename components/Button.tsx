import type { ComponentChildren } from "preact";

export interface ButtonProps {
  readonly id?: string;
  readonly onClick?: () => void;
  readonly children?: ComponentChildren;
  readonly disabled?: boolean;
}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      class="rounded-sm border-2 border-gray-500 bg-white px-2 py-1 transition-colors hover:bg-gray-200"
    />
  );
}
