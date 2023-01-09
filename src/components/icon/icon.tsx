import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { IconProps } from "./icon.type";

export function Icon({ icon, ...props }: IconProps): ReactElement {
  return <FontAwesomeIcon icon={regular(icon)} {...props} />;
}