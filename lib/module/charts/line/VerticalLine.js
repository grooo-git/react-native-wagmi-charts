function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Line as SVGLine } from 'react-native-svg';
import { LineChartDimensionsContext } from './Chart';
import { useLineChart } from './useLineChart';
import Animated, { useAnimatedProps } from 'react-native-reanimated';
LineChartVerticalLine.displayName = 'LineChartVerticalLine';
const AnimatedLine = Animated.createAnimatedComponent(SVGLine);
export function LineChartVerticalLine({
  color = 'gray',
  lineProps,
  at
}) {
  const {
    width,
    height
  } = React.useContext(LineChartDimensionsContext);
  const {
    data
  } = useLineChart();
  const lineX = React.useMemo(() => width / data.length * at, [data.length, width, at]);
  const lineAnimatedProps = useAnimatedProps(() => ({
    x1: lineX,
    x2: lineX,
    y1: 0,
    y2: height
  }));
  return /*#__PURE__*/React.createElement(AnimatedLine, _extends({
    animatedProps: lineAnimatedProps,
    stroke: color
  }, lineProps));
}
//# sourceMappingURL=VerticalLine.js.map