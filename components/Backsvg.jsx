import * as React from "react";
import Svg, { Path, Defs, RadialGradient, Stop } from "react-native-svg";
import { vw, vh } from "react-native-expo-viewport-units";
const Backsvg = (props) => (
  <Svg
    width={vw(250)}
    height={vh(250)}
    viewBox="0 0 900 1300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
<Path d="M820 609.033C820 733.279 641.681 834 421.714 834C201.746 834 23.4276 733.279 23.4276 609.033C23.4276 484.787 -78.1736 209 141.794 209C361.761 209 820 484.787 820 609.033Z" fill="#3F3D3E" fill-opacity="0.54"/>
<Path d="M726 360C781.174 411.035 762 546 625.605 446C404.911 337.274 250 299.818 250 188.607C250 77.3958 250.911 0 434.619 0C618.328 0 919.108 42.6965 726 360Z" fill="#333134"/>
<Path d="M759 784C759 906.055 610.359 916 427 916C243.641 916 95 817.055 95 695C95 572.945 547.641 312 731 312C914.359 312 759 661.945 759 784Z" fill="url(#paint0_angular_2159_262)" style="mix-blend-mode:overlay"/>
<Defs>
<RadialGradient id="paint0_angular_2159_262" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(219.5 885.5) rotate(-17.6301) scale(262.554 315.344)">
<Stop/>
<Stop offset="0.305" stop-color="#0D030F"/>
<Stop offset="0.365" stop-color="#130315"/>
<Stop offset="0.645" stop-color="#0E020F"/>
<Stop offset="0.742436" stop-color="#050000"/>
</RadialGradient>
</Defs>
 </Svg>
);
export default Backsvg;
