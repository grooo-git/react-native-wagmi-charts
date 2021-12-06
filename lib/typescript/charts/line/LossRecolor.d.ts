import * as React from 'react';
import Animated from 'react-native-reanimated';
import { LineChartPathProps } from './Path';
declare type LineChartPathWrapperProps = {
    animationDuration?: number;
    animationProps?: Partial<Animated.WithTimingConfig>;
    children?: React.ReactNode;
    color?: string;
    width?: number;
    at?: number;
    pathProps?: Partial<LineChartPathProps>;
    showInactivePath?: boolean;
};
export declare function LossRecolor({ animationDuration, animationProps, color, width: pathWidth, at, pathProps, }: LineChartPathWrapperProps): JSX.Element;
export {};
