import { ButtonProps } from "./button.type";

export const Button = ({ size, children, ...props }: ButtonProps) => {
  return <button type="button" className={size === "large" ? "bg-blue-800" : ""} {...props}>{children}</button>;
};