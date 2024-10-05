import { SVGAttributes } from "react";
import { ResponsiveValue, SpaceProps } from "styled-system";
import { CSS } from "styled-components/dist/types";
import { Colors } from "../input/types";

export interface SvgProps
  extends Omit<SVGAttributes<SVGElement>, "rotate">,
    SpaceProps {
  spin?: boolean;
  color?: keyof Colors;
  rotate?: ResponsiveValue<CSS.Property.Rotate>;
}
