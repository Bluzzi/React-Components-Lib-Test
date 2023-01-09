import { ReactElement } from "react";
import { Text } from "$components";
import { ButtonProps } from "./button.type";

export function Button({ children, ...props }: ButtonProps): ReactElement {
  return (
    <button type="button" {...props}>
      <Text className="flex items-center gap-2">
        {children}
      </Text>
    </button>
  );
}