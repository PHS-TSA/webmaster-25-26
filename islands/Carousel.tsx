import type { JSX } from "preact";

export interface Props {
  children: any;
}

export default function Carousel({ children }: Props): JSX.Element {
  return <div>{children}</div>;
}
