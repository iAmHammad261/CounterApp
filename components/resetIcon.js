import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRotateCcw = (props) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="#00FF00"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="rotate-ccw_svg__lucide rotate-ccw_svg__lucide-rotate-ccw"
    {...props}
  >
    <Path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <Path d="M3 3v5h5" />
  </Svg>
);
export default SvgRotateCcw;

