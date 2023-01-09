import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/free-regular-svg-icons";

export type IconProps = Omit<FontAwesomeIconProps, "icon"> & {
  icon: IconName;
};