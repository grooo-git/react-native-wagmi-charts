import React from 'react';
import { Line as SVGLine, LineProps } from 'react-native-svg';
import { LineChartDimensionsContext } from './Chart';
import { useLineChart } from './useLineChart';
import Animated, { useAnimatedProps } from 'react-native-reanimated';

type VerticalLineProps = {
  color?: string;
  lineProps?: Partial<LineProps>;
  at: number;
};

LineChartVerticalLine.displayName = 'LineChartVerticalLine';

const AnimatedLine = Animated.createAnimatedComponent(SVGLine);

export function LineChartVerticalLine({
  color = 'gray',
  lineProps,
  at,
}: VerticalLineProps) {
  const { width, height } = React.useContext(LineChartDimensionsContext);
  const { data } = useLineChart();

  const lineX = React.useMemo(
    () => (width / data.length) * at,
    [data.length, width, at]
  );

  const lineAnimatedProps = useAnimatedProps(() => ({
    x1: lineX,
    x2: lineX,
    y1: 0,
    y2: height,
  }));

  return (
    <AnimatedLine
      animatedProps={lineAnimatedProps}
      stroke={color}
      {...lineProps}
    />
  );
}
