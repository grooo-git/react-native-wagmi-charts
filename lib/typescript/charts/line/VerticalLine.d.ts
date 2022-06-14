/// <reference types="react" />
import { LineProps } from 'react-native-svg';
declare type VerticalLineProps = {
    color?: string;
    lineProps?: Partial<LineProps>;
    at: number;
};
export declare function LineChartVerticalLine({ color, lineProps, at, }: VerticalLineProps): JSX.Element;
export declare namespace LineChartVerticalLine {
    var displayName: string;
}
export {};
