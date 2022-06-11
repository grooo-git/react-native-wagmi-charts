import React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { useLineChart } from './useLineChart';
import { formatDatetime } from '../../utils';

export const XDateAxis = ({
  viewStyle = {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle,
  tickNum,
  locale,
  options,
}: {
  viewStyle?: ViewStyle;
  textStyle: TextStyle;
  tickNum: number;
  locale?: string;
  options?: Intl.DateTimeFormatOptions;
}) => {
  const { data } = useLineChart();

  const spacing = Math.floor(data.length / (tickNum - 1));
  let dates = [];

  for (let x = 0; x < tickNum - 1; x++) {
    dates.push(
      formatDatetime({
        value: data[x * spacing].timestamp,
        locale,
        options,
      })
    );
  }
  dates.push(
    formatDatetime({
      value: data[data.length - 1].timestamp,
      locale,
      options,
    })
  );

  return (
    <View style={viewStyle}>
      {dates.map((date, i) => {
        return (
          <Text key={i} style={textStyle}>
            {date}
          </Text>
        );
      })}
    </View>
  );
};
