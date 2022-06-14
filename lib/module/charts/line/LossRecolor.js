function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { LineChartDimensionsContext } from './Chart';
import { LineChartPath } from './Path';
import { useLineChart } from './useLineChart';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedProps, withTiming } from 'react-native-reanimated';
import { getYForX, parse } from 'react-native-redash';
import { Defs, Svg, Rect, ClipPath } from 'react-native-svg';
const AnimatedSVG = Animated.createAnimatedComponent(Svg);
export function LossRecolor({
  animationDuration = 300,
  animationProps = {},
  color = 'black',
  width: pathWidth = 3,
  at = 0,
  pathProps = {},
  endPoint
}) {
  const {
    width,
    height,
    path
  } = React.useContext(LineChartDimensionsContext);
  const {
    currentX,
    isActive,
    data
  } = useLineChart(); ////////////////////////////////////////////////

  const svgProps = useAnimatedProps(() => ({
    width: isActive.value ? currentX.value : withTiming(width, Object.assign({
      duration: animationDuration
    }, animationProps))
  }));
  const parsedPath = React.useMemo(() => parse(path), [path]);
  const pointWidth = React.useMemo(() => width / data.length, [data.length, width]);
  const Y = getYForX(parsedPath, pointWidth * at); // The point of this is to cut off the color override at a certain point
  // Otherwise we can't use LineChart.Highlight

  const rectWidth = endPoint ? endPoint * pointWidth : undefined; ////////////////////////////////////////////////

  return /*#__PURE__*/React.createElement(View, {
    style: StyleSheet.absoluteFill
  }, /*#__PURE__*/React.createElement(AnimatedSVG, {
    animatedProps: svgProps,
    height: height
  }, /*#__PURE__*/React.createElement(LineChartPath, _extends({
    color: color,
    width: pathWidth
  }, pathProps, {
    clipPath: 'url(#clip-path-clip)'
  })), /*#__PURE__*/React.createElement(Defs, null, /*#__PURE__*/React.createElement(ClipPath, {
    id: "clip-path-clip"
  }, /*#__PURE__*/React.createElement(Rect, {
    x: "0",
    y: Y,
    width: rectWidth !== null && rectWidth !== void 0 ? rectWidth : '100%',
    height: "100%"
  })))));
}
//# sourceMappingURL=LossRecolor.js.map