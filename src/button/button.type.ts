import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren<{
  size: "small" | "medium" | "large";
}>;