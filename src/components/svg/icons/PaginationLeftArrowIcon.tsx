import React from "react";

import { Svg } from "components";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = ({ color = "transparent", ...props }) => {
  return (
    <Svg viewBox="0 0 24 24" {...props} color={color}>
      <path
        d="M14 8L10 12L14 16"
        stroke="#94A0B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
