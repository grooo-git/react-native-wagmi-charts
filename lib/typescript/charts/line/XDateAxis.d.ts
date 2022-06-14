/// <reference types="react" />
import { TextStyle, ViewStyle } from 'react-native';
export declare const XDateAxis: ({ viewStyle, textStyle, tickNum, locale, options, }: {
    viewStyle?: ViewStyle | undefined;
    textStyle: TextStyle;
    tickNum: number;
    locale?: string | undefined;
    options?: Intl.DateTimeFormatOptions | undefined;
}) => JSX.Element;
