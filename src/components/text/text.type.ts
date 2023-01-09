import { HTMLAttributes, PropsWithChildren } from "react";

export type TextProps = PropsWithChildren & HTMLAttributes<HTMLParagraphElement> & {
  type?: "p" | "h4" | "h3" | "h2" | "h1";
  color?: "primary" | "black" | "white";
};