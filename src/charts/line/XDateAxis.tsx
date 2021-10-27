import React from 'react';
import { Text, View } from 'react-native';

import type { TFormatterFn } from '../candle/types';
import { useLineChart } from './useLineChart';
import { formatDatetime } from '../../utils';

export const XDateAxis = ({
  tickNum,
  locale,
  options,
}: {
  tickNum: number;
  format?: TFormatterFn<number>;
  locale?: string;
  options?: Intl.DateTimeFormatOptions;
}) => {
  const { data } = useLineChart();

  const spacing = Math.floor(data.length / (tickNum - 1));
  let dates = [];

  for (let x = 0; x < tickNum - 1; x++) {
    console.log(x, spacing, data.length);
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
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      {dates.map((date, i) => {
        return <Text key={i}>{date}</Text>;
      })}
    </View>
  );
};
