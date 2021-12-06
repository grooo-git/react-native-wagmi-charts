import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Defs, Svg, Rect, ClipPath } from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';

import { LineChartDimensionsContext } from './Chart';
import { LineChartPath, LineChartPathProps } from './Path';
import { useLineChart } from './useLineChart';
import { getYForX, parse } from 'react-native-redash';

const AnimatedSVG = Animated.createAnimatedComponent(Svg);

type LineChartPathWrapperProps = {
  animationDuration?: number;
  animationProps?: Partial<Animated.WithTimingConfig>;
  children?: React.ReactNode;
  color?: string;
  width?: number;
  at?: number;
  pathProps?: Partial<LineChartPathProps>;
  showInactivePath?: boolean;
};

export function LossRecolor({
  animationDuration = 300,
  animationProps = {},
  color = 'black',
  width: pathWidth = 3,
  at = 0,
  pathProps = {},
}: LineChartPathWrapperProps) {
  const { width, height, path } = React.useContext(LineChartDimensionsContext);
  const { currentX, isActive, data } = useLineChart();

  ////////////////////////////////////////////////

  const svgProps = useAnimatedProps(() => ({
    width: isActive.value
      ? currentX.value
      : withTiming(
          width,
          Object.assign({ duration: animationDuration }, animationProps)
        ),
  }));
  const parsedPath = React.useMemo(() => parse(path), [path]);

  const pointWidth = React.useMemo(
    () => width / data.length,
    [data.length, width]
  );
  const Y = getYForX(parsedPath, pointWidth * at);

  ////////////////////////////////////////////////
  return (
    <View style={StyleSheet.absoluteFill}>
      <AnimatedSVG animatedProps={svgProps} height={height}>
        <LineChartPath
          color={color}
          width={pathWidth}
          {...pathProps}
          clipPath={'url(#clip-path-clip)'}
        />
        <Defs>
          <ClipPath id="clip-path-clip">
            <Rect x="0" y={Y!} width="100%" height="100%" />
          </ClipPath>
        </Defs>
      </AnimatedSVG>
    </View>
  );
}