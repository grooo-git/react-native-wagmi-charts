import { LineChartPathProps } from './Path';
import * as React from 'react';
import { WithTimingConfig } from 'react-native-reanimated';
declare type LineChartPathWrapperProps = {
    animationDuration?: number;
    animationProps?: Partial<WithTimingConfig>;
    children?: React.ReactNode;
    color?: string;
    width?: number;
    at?: number;
    pathProps?: Partial<LineChartPathProps>;
    endPoint?: number;
};
export declare function LossRecolor({ animationDuration, animationProps, color, width: pathWidth, at, pathProps, endPoint, }: LineChartPathWrapperProps): JSX.Element;
export {};
