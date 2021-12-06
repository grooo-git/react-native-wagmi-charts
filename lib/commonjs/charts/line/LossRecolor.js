"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LossRecolor = LossRecolor;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeSvg = require("react-native-svg");

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

var _Chart = require("./Chart");

var _Path = require("./Path");

var _useLineChart = require("./useLineChart");

var _reactNativeRedash = require("react-native-redash");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const AnimatedSVG = _reactNativeReanimated.default.createAnimatedComponent(_reactNativeSvg.Svg);

function LossRecolor({
  animationDuration = 300,
  animationProps = {},
  color = 'black',
  width: pathWidth = 3,
  at = 0,
  pathProps = {}
}) {
  const {
    width,
    height,
    path
  } = React.useContext(_Chart.LineChartDimensionsContext);
  const {
    currentX,
    isActive,
    data
  } = (0, _useLineChart.useLineChart)(); ////////////////////////////////////////////////

  const svgProps = (0, _reactNativeReanimated.useAnimatedProps)(() => ({
    width: isActive.value ? currentX.value : (0, _reactNativeReanimated.withTiming)(width, Object.assign({
      duration: animationDuration
    }, animationProps))
  }));
  const parsedPath = React.useMemo(() => (0, _reactNativeRedash.parse)(path), [path]);
  const pointWidth = React.useMemo(() => width / data.length, [data.length, width]);
  const Y = (0, _reactNativeRedash.getYForX)(parsedPath, pointWidth * at); ////////////////////////////////////////////////

  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: _reactNative.StyleSheet.absoluteFill
  }, /*#__PURE__*/React.createElement(AnimatedSVG, {
    animatedProps: svgProps,
    height: height
  }, /*#__PURE__*/React.createElement(_Path.LineChartPath, _extends({
    color: color,
    width: pathWidth
  }, pathProps, {
    clipPath: 'url(#clip-path-clip)'
  })), /*#__PURE__*/React.createElement(_reactNativeSvg.Defs, null, /*#__PURE__*/React.createElement(_reactNativeSvg.ClipPath, {
    id: "clip-path-clip"
  }, /*#__PURE__*/React.createElement(_reactNativeSvg.Rect, {
    x: "0",
    y: Y,
    width: "100%",
    height: "100%"
  })))));
}
//# sourceMappingURL=LossRecolor.js.map