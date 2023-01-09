import { ReactElement } from "react";
import { TextProps } from "./text.type";
import { clsx } from "clsx";

export function Text({ children, type = "p", color = "black", className, ...props }: TextProps): ReactElement {
  const Tag = type;

  return <Tag className={clsx(`text-${color}`, className)} {...props}>{children}</Tag>;
}