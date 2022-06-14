"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XDateAxis = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _useLineChart = require("./useLineChart");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const XDateAxis = ({
  viewStyle = {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textStyle,
  tickNum,
  locale,
  options
}) => {
  const {
    data
  } = (0, _useLineChart.useLineChart)();
  const spacing = Math.floor(data.length / (tickNum - 1));
  let dates = [];

  for (let x = 0; x < tickNum - 1; x++) {
    dates.push((0, _utils.formatDatetime)({
      value: data[x * spacing].timestamp,
      locale,
      options
    }));
  }

  dates.push((0, _utils.formatDatetime)({
    value: data[data.length - 1].timestamp,
    locale,
    options
  }));
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: viewStyle
  }, dates.map((date, i) => {
    return /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      key: i,
      style: textStyle
    }, date);
  }));
};

exports.XDateAxis = XDateAxis;
//# sourceMappingURL=XDateAxis.js.map