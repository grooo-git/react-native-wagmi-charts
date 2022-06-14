"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineChartVerticalLine = LineChartVerticalLine;

var _react = _interopRequireDefault(require("react"));

var _reactNativeSvg = require("react-native-svg");

var _Chart = require("./Chart");

var _useLineChart = require("./useLineChart");

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

LineChartVerticalLine.displayName = 'LineChartVerticalLine';

const AnimatedLine = _reactNativeReanimated.default.createAnimatedComponent(_reactNativeSvg.Line);

function LineChartVerticalLine({
  color = 'gray',
  lineProps,
  at
}) {
  const {
    width,
    height
  } = _react.default.useContext(_Chart.LineChartDimensionsContext);

  const {
    data
  } = (0, _useLineChart.useLineChart)();

  const lineX = _react.default.useMemo(() => width / data.length * at, [data.length, width, at]);

  const lineAnimatedProps = (0, _reactNativeReanimated.useAnimatedProps)(() => ({
    x1: lineX,
    x2: lineX,
    y1: 0,
    y2: height
  }));
  return /*#__PURE__*/_react.default.createElement(AnimatedLine, _extends({
    animatedProps: lineAnimatedProps,
    stroke: color
  }, lineProps));
}
//# sourceMappingURL=VerticalLine.js.map